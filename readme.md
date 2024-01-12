# Execute Query
The Execute GQL Query action step is used to execute a GQL query in the GQL playground. 
This step can can be very usefull if you want to be able to communicate between two applications by simplifying the process.

## What is it for?
This step is made to make the process of communicating between two applications easier and more straightforward by
executing the desired query in the playground.

This step is made to work with the 'Execute Query' function. See: [Generate Query](https://github.com/degrootsam/generate-query)

![Execute Query](./public/Screenshot_1.png)

## How to use
1. First you need to generate a Query. See: [Generate Query](https://github.com/degrootsam/generate-query)
2. Enter the identifier of your target application in the **APP IDENTIFIER** field. If your applications runtime url is `my-app-development.betty.app`, then the identifier is `my-app-development`.
3. Enter the UUID of your application in the **APP UUID** field. See: [docs.bettyblocks.com](https://docs.bettyblocks.com/en/articles/5598064-locating-your-betty-blocks-application-id-uuid)
4. Enter the Query from the [Generate Query](https://github.com/degrootsam/generate-query) action step.
5. Optionally provide headers. For example, when executing private actions you will need the **Authorization** header followed by the JWT Bearer token:
   
```
key: "Authorization"
value: "Bearer thisismysecrettoken"
```

# Generate Query

This Action Step is used to generate a GQL query which can be used in combination with the 'Execute GQL Query' Action step to execute it within the playground.

## What is it for?

This step is made to make the process of communicating between two applications easier and more straightforward. You can use the 'DOCS' function from the palyground to easily copy/paste queries into the query body without having to manipulate the query much (which would be necessary when using the HTTP(s) step for example).

This step is made to work with the 'Execute GQL Query' function. See: [Execute GQL Query](https://github.com/degrootsam/generate-gql-query)

![Generate Query](./public/Screenshot_1.png)

## How to use it to Login (and obtain a JWT)

Most applications are using secured actions. Which require a JWT to be fired. Follow the instructions below to setup the step to be able to obtain a JWT

1. Place the step into your action.
2. Copy/paste the following query into the **GRAPHQL QUERY** section:

```
mutation Login($username: String!, $password: String!, $authProfileUuid:String!){
  login(username: $username, password: $password, authProfileUuid: $authProfileUuid) {
		jwtToken
  }
}
```

3. The **IS ACTION QUERY** should be toggled off.
4. Enter the following **KEYS** into the key/variable map:

- authProfileUuid
- username
- password

5. Fill in the values in the **VALUE** column. It is advised to create variables for this.
6. Enter the desired name in the **OUTPUT**.
7. Use the **Execute Query** step to execute the query. You can read how to use this step at: [Execute Query](https://github.com/degrootsam/generate-gql-query/blob/main/readme.md).

## How to generate a query to execute an action

1. Place the step into your action.
2. Navigate to the action you wish to execute.
3. Click Test Run in the top right corner.
4. Copy the **MUTATION** field and paste this in the **GRAPHQL QUERY** field of the action step.
5. Toggle the **IS ACTION QUERY** on.
6. Enter each input variable as **KEY** in the key/variable map.
7. Bind the values to the input variables if applicable.
8. Define the output variable in the **OUTPUT** field.