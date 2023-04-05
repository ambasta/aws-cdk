"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const cloudwatch = require("aws-cdk-lib/aws-cloudwatch");
const lambda = require("aws-cdk-lib/aws-lambda");
const cdk = require("aws-cdk-lib");
const codedeploy = require("aws-cdk-lib/aws-codedeploy");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-codedeploy-lambda');
const handler = new lambda.Function(stack, 'Handler', {
    code: lambda.Code.fromAsset(path.join(__dirname, 'handler')),
    handler: 'index.handler',
    runtime: lambda.Runtime.NODEJS_14_X,
});
const version = handler.currentVersion;
const blueGreenAlias = new lambda.Alias(stack, 'Alias', {
    aliasName: 'alias',
    version,
});
const preHook = new lambda.Function(stack, 'PreHook', {
    code: lambda.Code.fromAsset(path.join(__dirname, 'preHook')),
    handler: 'index.handler',
    runtime: lambda.Runtime.NODEJS_14_X,
});
const postHook = new lambda.Function(stack, 'PostHook', {
    code: lambda.Code.fromAsset(path.join(__dirname, 'postHook')),
    handler: 'index.handler',
    runtime: lambda.Runtime.NODEJS_14_X,
});
new codedeploy.LambdaDeploymentGroup(stack, 'BlueGreenDeployment', {
    alias: blueGreenAlias,
    deploymentConfig: codedeploy.LambdaDeploymentConfig.LINEAR_10PERCENT_EVERY_1MINUTE,
    alarms: [
        new cloudwatch.Alarm(stack, 'BlueGreenErrors', {
            comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
            threshold: 1,
            evaluationPeriods: 1,
            metric: blueGreenAlias.metricErrors(),
        }),
    ],
    preHook,
    postHook,
});
const secondAlias = new lambda.Alias(stack, 'SecondAlias', {
    aliasName: 'secondAlias',
    version,
});
new codedeploy.LambdaDeploymentGroup(stack, 'SecondDeployment', {
    alias: secondAlias,
    deploymentConfig: codedeploy.LambdaDeploymentConfig.CANARY_10PERCENT_5MINUTES,
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuZGVwbG95bWVudC1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnLmRlcGxveW1lbnQtZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFDN0IseURBQXlEO0FBQ3pELGlEQUFpRDtBQUNqRCxtQ0FBbUM7QUFDbkMseURBQXlEO0FBR3pELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztBQUU5RCxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUNwRCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUQsT0FBTyxFQUFFLGVBQWU7SUFDeEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztDQUNwQyxDQUFDLENBQUM7QUFDSCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO0FBQ3ZDLE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFO0lBQ3RELFNBQVMsRUFBRSxPQUFPO0lBQ2xCLE9BQU87Q0FDUixDQUFDLENBQUM7QUFFSCxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUNwRCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUQsT0FBTyxFQUFFLGVBQWU7SUFDeEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztDQUNwQyxDQUFDLENBQUM7QUFDSCxNQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUN0RCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0QsT0FBTyxFQUFFLGVBQWU7SUFDeEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztDQUNwQyxDQUFDLENBQUM7QUFFSCxJQUFJLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUscUJBQXFCLEVBQUU7SUFDakUsS0FBSyxFQUFFLGNBQWM7SUFDckIsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLHNCQUFzQixDQUFDLDhCQUE4QjtJQUNsRixNQUFNLEVBQUU7UUFDTixJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFO1lBQzdDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0I7WUFDeEUsU0FBUyxFQUFFLENBQUM7WUFDWixpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sRUFBRSxjQUFjLENBQUMsWUFBWSxFQUFFO1NBQ3RDLENBQUM7S0FDSDtJQUNELE9BQU87SUFDUCxRQUFRO0NBQ1QsQ0FBQyxDQUFDO0FBRUgsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUU7SUFDekQsU0FBUyxFQUFFLGFBQWE7SUFDeEIsT0FBTztDQUNSLENBQUMsQ0FBQztBQUVILElBQUksVUFBVSxDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRTtJQUM5RCxLQUFLLEVBQUUsV0FBVztJQUNsQixnQkFBZ0IsRUFBRSxVQUFVLENBQUMsc0JBQXNCLENBQUMseUJBQXlCO0NBQzlFLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBjbG91ZHdhdGNoIGZyb20gJ2F3cy1jZGstbGliL2F3cy1jbG91ZHdhdGNoJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgKiBhcyBjb2RlZGVwbG95IGZyb20gJ2F3cy1jZGstbGliL2F3cy1jb2RlZGVwbG95JztcblxuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuY29uc3Qgc3RhY2sgPSBuZXcgY2RrLlN0YWNrKGFwcCwgJ2F3cy1jZGstY29kZWRlcGxveS1sYW1iZGEnKTtcblxuY29uc3QgaGFuZGxlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oc3RhY2ssICdIYW5kbGVyJywge1xuICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgJ2hhbmRsZXInKSksXG4gIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbiAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG59KTtcbmNvbnN0IHZlcnNpb24gPSBoYW5kbGVyLmN1cnJlbnRWZXJzaW9uO1xuY29uc3QgYmx1ZUdyZWVuQWxpYXMgPSBuZXcgbGFtYmRhLkFsaWFzKHN0YWNrLCAnQWxpYXMnLCB7XG4gIGFsaWFzTmFtZTogJ2FsaWFzJyxcbiAgdmVyc2lvbixcbn0pO1xuXG5jb25zdCBwcmVIb29rID0gbmV3IGxhbWJkYS5GdW5jdGlvbihzdGFjaywgJ1ByZUhvb2snLCB7XG4gIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChwYXRoLmpvaW4oX19kaXJuYW1lLCAncHJlSG9vaycpKSxcbiAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbn0pO1xuY29uc3QgcG9zdEhvb2sgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHN0YWNrLCAnUG9zdEhvb2snLCB7XG4gIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChwYXRoLmpvaW4oX19kaXJuYW1lLCAncG9zdEhvb2snKSksXG4gIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbiAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG59KTtcblxubmV3IGNvZGVkZXBsb3kuTGFtYmRhRGVwbG95bWVudEdyb3VwKHN0YWNrLCAnQmx1ZUdyZWVuRGVwbG95bWVudCcsIHtcbiAgYWxpYXM6IGJsdWVHcmVlbkFsaWFzLFxuICBkZXBsb3ltZW50Q29uZmlnOiBjb2RlZGVwbG95LkxhbWJkYURlcGxveW1lbnRDb25maWcuTElORUFSXzEwUEVSQ0VOVF9FVkVSWV8xTUlOVVRFLFxuICBhbGFybXM6IFtcbiAgICBuZXcgY2xvdWR3YXRjaC5BbGFybShzdGFjaywgJ0JsdWVHcmVlbkVycm9ycycsIHtcbiAgICAgIGNvbXBhcmlzb25PcGVyYXRvcjogY2xvdWR3YXRjaC5Db21wYXJpc29uT3BlcmF0b3IuR1JFQVRFUl9USEFOX1RIUkVTSE9MRCxcbiAgICAgIHRocmVzaG9sZDogMSxcbiAgICAgIGV2YWx1YXRpb25QZXJpb2RzOiAxLFxuICAgICAgbWV0cmljOiBibHVlR3JlZW5BbGlhcy5tZXRyaWNFcnJvcnMoKSxcbiAgICB9KSxcbiAgXSxcbiAgcHJlSG9vayxcbiAgcG9zdEhvb2ssXG59KTtcblxuY29uc3Qgc2Vjb25kQWxpYXMgPSBuZXcgbGFtYmRhLkFsaWFzKHN0YWNrLCAnU2Vjb25kQWxpYXMnLCB7XG4gIGFsaWFzTmFtZTogJ3NlY29uZEFsaWFzJyxcbiAgdmVyc2lvbixcbn0pO1xuXG5uZXcgY29kZWRlcGxveS5MYW1iZGFEZXBsb3ltZW50R3JvdXAoc3RhY2ssICdTZWNvbmREZXBsb3ltZW50Jywge1xuICBhbGlhczogc2Vjb25kQWxpYXMsXG4gIGRlcGxveW1lbnRDb25maWc6IGNvZGVkZXBsb3kuTGFtYmRhRGVwbG95bWVudENvbmZpZy5DQU5BUllfMTBQRVJDRU5UXzVNSU5VVEVTLFxufSk7XG5cbmFwcC5zeW50aCgpO1xuIl19