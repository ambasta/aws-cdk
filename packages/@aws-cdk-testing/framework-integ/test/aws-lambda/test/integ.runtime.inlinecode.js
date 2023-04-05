"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_lambda_1 = require("aws-cdk-lib/aws-lambda");
// CloudFormation supports InlineCode only for a subset of runtimes. This integration test
// is used to verify that the ones marked in the CDK are in fact supported by CloudFormation.
// Running `cdk deploy` on this stack will confirm if all the runtimes here are supported.
//
// To verify that the lambda function works correctly, use the function names that are part
// of the stack output (printed on the console at the end of 'cdk deploy') and run the command -
// aws lambda invoke --function-name <function-name>
//
// If successful, the output will contain "success"
const app = new aws_cdk_lib_1.App();
const stack = new aws_cdk_lib_1.Stack(app, 'aws-cdk-lambda-runtime-inlinecode');
const python37 = new aws_lambda_1.Function(stack, 'PYTHON_3_7', {
    code: new aws_lambda_1.InlineCode('def handler(event, context):\n  return "success"'),
    handler: 'index.handler',
    runtime: aws_lambda_1.Runtime.PYTHON_3_7,
});
new aws_cdk_lib_1.CfnOutput(stack, 'PYTHON_3_7-functionName', { value: python37.functionName });
const python38 = new aws_lambda_1.Function(stack, 'PYTHON_3_8', {
    code: new aws_lambda_1.InlineCode('def handler(event, context):\n  return "success"'),
    handler: 'index.handler',
    runtime: aws_lambda_1.Runtime.PYTHON_3_8,
});
new aws_cdk_lib_1.CfnOutput(stack, 'PYTHON_3_8-functionName', { value: python38.functionName });
const python39 = new aws_lambda_1.Function(stack, 'PYTHON_3_9', {
    code: new aws_lambda_1.InlineCode('def handler(event, context):\n  return "success"'),
    handler: 'index.handler',
    runtime: aws_lambda_1.Runtime.PYTHON_3_9,
});
new aws_cdk_lib_1.CfnOutput(stack, 'PYTHON_3_9-functionName', { value: python39.functionName });
const node14xfn = new aws_lambda_1.Function(stack, 'NODEJS_14_X', {
    code: new aws_lambda_1.InlineCode('exports.handler = async function(event) { return "success" }'),
    handler: 'index.handler',
    runtime: aws_lambda_1.Runtime.NODEJS_14_X,
});
new aws_cdk_lib_1.CfnOutput(stack, 'NODEJS_14_X-functionName', { value: node14xfn.functionName });
const node16xfn = new aws_lambda_1.Function(stack, 'NODEJS_16_X', {
    code: new aws_lambda_1.InlineCode('exports.handler = async function(event) { return "success" }'),
    handler: 'index.handler',
    runtime: aws_lambda_1.Runtime.NODEJS_16_X,
});
new aws_cdk_lib_1.CfnOutput(stack, 'NODEJS_16_X-functionName', { value: node16xfn.functionName });
const node18xfn = new aws_lambda_1.Function(stack, 'NODEJS_18_X', {
    code: new aws_lambda_1.InlineCode('exports.handler = async function(event) { return "success" }'),
    handler: 'index.handler',
    runtime: aws_lambda_1.Runtime.NODEJS_18_X,
});
new aws_cdk_lib_1.CfnOutput(stack, 'NODEJS_18_X-functionName', { value: node18xfn.functionName });
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcucnVudGltZS5pbmxpbmVjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZWcucnVudGltZS5pbmxpbmVjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQW9EO0FBQ3BELHVEQUF1RTtBQUV2RSwwRkFBMEY7QUFDMUYsNkZBQTZGO0FBQzdGLDBGQUEwRjtBQUMxRixFQUFFO0FBQ0YsMkZBQTJGO0FBQzNGLGdHQUFnRztBQUNoRyxvREFBb0Q7QUFDcEQsRUFBRTtBQUNGLG1EQUFtRDtBQUVuRCxNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFHLEVBQUUsQ0FBQztBQUV0QixNQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFLLENBQUMsR0FBRyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7QUFFbEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxxQkFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDakQsSUFBSSxFQUFFLElBQUksdUJBQVUsQ0FBQyxrREFBa0QsQ0FBQztJQUN4RSxPQUFPLEVBQUUsZUFBZTtJQUN4QixPQUFPLEVBQUUsb0JBQU8sQ0FBQyxVQUFVO0NBQzVCLENBQUMsQ0FBQztBQUNILElBQUksdUJBQVMsQ0FBQyxLQUFLLEVBQUUseUJBQXlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFFbEYsTUFBTSxRQUFRLEdBQUcsSUFBSSxxQkFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDakQsSUFBSSxFQUFFLElBQUksdUJBQVUsQ0FBQyxrREFBa0QsQ0FBQztJQUN4RSxPQUFPLEVBQUUsZUFBZTtJQUN4QixPQUFPLEVBQUUsb0JBQU8sQ0FBQyxVQUFVO0NBQzVCLENBQUMsQ0FBQztBQUNILElBQUksdUJBQVMsQ0FBQyxLQUFLLEVBQUUseUJBQXlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFFbEYsTUFBTSxRQUFRLEdBQUcsSUFBSSxxQkFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDakQsSUFBSSxFQUFFLElBQUksdUJBQVUsQ0FBQyxrREFBa0QsQ0FBQztJQUN4RSxPQUFPLEVBQUUsZUFBZTtJQUN4QixPQUFPLEVBQUUsb0JBQU8sQ0FBQyxVQUFVO0NBQzVCLENBQUMsQ0FBQztBQUNILElBQUksdUJBQVMsQ0FBQyxLQUFLLEVBQUUseUJBQXlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFFbEYsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUU7SUFDbkQsSUFBSSxFQUFFLElBQUksdUJBQVUsQ0FBQyw4REFBOEQsQ0FBQztJQUNwRixPQUFPLEVBQUUsZUFBZTtJQUN4QixPQUFPLEVBQUUsb0JBQU8sQ0FBQyxXQUFXO0NBQzdCLENBQUMsQ0FBQztBQUNILElBQUksdUJBQVMsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFFcEYsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUU7SUFDbkQsSUFBSSxFQUFFLElBQUksdUJBQVUsQ0FBQyw4REFBOEQsQ0FBQztJQUNwRixPQUFPLEVBQUUsZUFBZTtJQUN4QixPQUFPLEVBQUUsb0JBQU8sQ0FBQyxXQUFXO0NBQzdCLENBQUMsQ0FBQztBQUNILElBQUksdUJBQVMsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFFcEYsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUU7SUFDbkQsSUFBSSxFQUFFLElBQUksdUJBQVUsQ0FBQyw4REFBOEQsQ0FBQztJQUNwRixPQUFPLEVBQUUsZUFBZTtJQUN4QixPQUFPLEVBQUUsb0JBQU8sQ0FBQyxXQUFXO0NBQzdCLENBQUMsQ0FBQztBQUNILElBQUksdUJBQVMsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFFcEYsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwLCBDZm5PdXRwdXQsIFN0YWNrIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgRnVuY3Rpb24sIElubGluZUNvZGUsIFJ1bnRpbWUgfSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcblxuLy8gQ2xvdWRGb3JtYXRpb24gc3VwcG9ydHMgSW5saW5lQ29kZSBvbmx5IGZvciBhIHN1YnNldCBvZiBydW50aW1lcy4gVGhpcyBpbnRlZ3JhdGlvbiB0ZXN0XG4vLyBpcyB1c2VkIHRvIHZlcmlmeSB0aGF0IHRoZSBvbmVzIG1hcmtlZCBpbiB0aGUgQ0RLIGFyZSBpbiBmYWN0IHN1cHBvcnRlZCBieSBDbG91ZEZvcm1hdGlvbi5cbi8vIFJ1bm5pbmcgYGNkayBkZXBsb3lgIG9uIHRoaXMgc3RhY2sgd2lsbCBjb25maXJtIGlmIGFsbCB0aGUgcnVudGltZXMgaGVyZSBhcmUgc3VwcG9ydGVkLlxuLy9cbi8vIFRvIHZlcmlmeSB0aGF0IHRoZSBsYW1iZGEgZnVuY3Rpb24gd29ya3MgY29ycmVjdGx5LCB1c2UgdGhlIGZ1bmN0aW9uIG5hbWVzIHRoYXQgYXJlIHBhcnRcbi8vIG9mIHRoZSBzdGFjayBvdXRwdXQgKHByaW50ZWQgb24gdGhlIGNvbnNvbGUgYXQgdGhlIGVuZCBvZiAnY2RrIGRlcGxveScpIGFuZCBydW4gdGhlIGNvbW1hbmQgLVxuLy8gYXdzIGxhbWJkYSBpbnZva2UgLS1mdW5jdGlvbi1uYW1lIDxmdW5jdGlvbi1uYW1lPlxuLy9cbi8vIElmIHN1Y2Nlc3NmdWwsIHRoZSBvdXRwdXQgd2lsbCBjb250YWluIFwic3VjY2Vzc1wiXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxuY29uc3Qgc3RhY2sgPSBuZXcgU3RhY2soYXBwLCAnYXdzLWNkay1sYW1iZGEtcnVudGltZS1pbmxpbmVjb2RlJyk7XG5cbmNvbnN0IHB5dGhvbjM3ID0gbmV3IEZ1bmN0aW9uKHN0YWNrLCAnUFlUSE9OXzNfNycsIHtcbiAgY29kZTogbmV3IElubGluZUNvZGUoJ2RlZiBoYW5kbGVyKGV2ZW50LCBjb250ZXh0KTpcXG4gIHJldHVybiBcInN1Y2Nlc3NcIicpLFxuICBoYW5kbGVyOiAnaW5kZXguaGFuZGxlcicsXG4gIHJ1bnRpbWU6IFJ1bnRpbWUuUFlUSE9OXzNfNyxcbn0pO1xubmV3IENmbk91dHB1dChzdGFjaywgJ1BZVEhPTl8zXzctZnVuY3Rpb25OYW1lJywgeyB2YWx1ZTogcHl0aG9uMzcuZnVuY3Rpb25OYW1lIH0pO1xuXG5jb25zdCBweXRob24zOCA9IG5ldyBGdW5jdGlvbihzdGFjaywgJ1BZVEhPTl8zXzgnLCB7XG4gIGNvZGU6IG5ldyBJbmxpbmVDb2RlKCdkZWYgaGFuZGxlcihldmVudCwgY29udGV4dCk6XFxuICByZXR1cm4gXCJzdWNjZXNzXCInKSxcbiAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICBydW50aW1lOiBSdW50aW1lLlBZVEhPTl8zXzgsXG59KTtcbm5ldyBDZm5PdXRwdXQoc3RhY2ssICdQWVRIT05fM184LWZ1bmN0aW9uTmFtZScsIHsgdmFsdWU6IHB5dGhvbjM4LmZ1bmN0aW9uTmFtZSB9KTtcblxuY29uc3QgcHl0aG9uMzkgPSBuZXcgRnVuY3Rpb24oc3RhY2ssICdQWVRIT05fM185Jywge1xuICBjb2RlOiBuZXcgSW5saW5lQ29kZSgnZGVmIGhhbmRsZXIoZXZlbnQsIGNvbnRleHQpOlxcbiAgcmV0dXJuIFwic3VjY2Vzc1wiJyksXG4gIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbiAgcnVudGltZTogUnVudGltZS5QWVRIT05fM185LFxufSk7XG5uZXcgQ2ZuT3V0cHV0KHN0YWNrLCAnUFlUSE9OXzNfOS1mdW5jdGlvbk5hbWUnLCB7IHZhbHVlOiBweXRob24zOS5mdW5jdGlvbk5hbWUgfSk7XG5cbmNvbnN0IG5vZGUxNHhmbiA9IG5ldyBGdW5jdGlvbihzdGFjaywgJ05PREVKU18xNF9YJywge1xuICBjb2RlOiBuZXcgSW5saW5lQ29kZSgnZXhwb3J0cy5oYW5kbGVyID0gYXN5bmMgZnVuY3Rpb24oZXZlbnQpIHsgcmV0dXJuIFwic3VjY2Vzc1wiIH0nKSxcbiAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICBydW50aW1lOiBSdW50aW1lLk5PREVKU18xNF9YLFxufSk7XG5uZXcgQ2ZuT3V0cHV0KHN0YWNrLCAnTk9ERUpTXzE0X1gtZnVuY3Rpb25OYW1lJywgeyB2YWx1ZTogbm9kZTE0eGZuLmZ1bmN0aW9uTmFtZSB9KTtcblxuY29uc3Qgbm9kZTE2eGZuID0gbmV3IEZ1bmN0aW9uKHN0YWNrLCAnTk9ERUpTXzE2X1gnLCB7XG4gIGNvZGU6IG5ldyBJbmxpbmVDb2RlKCdleHBvcnRzLmhhbmRsZXIgPSBhc3luYyBmdW5jdGlvbihldmVudCkgeyByZXR1cm4gXCJzdWNjZXNzXCIgfScpLFxuICBoYW5kbGVyOiAnaW5kZXguaGFuZGxlcicsXG4gIHJ1bnRpbWU6IFJ1bnRpbWUuTk9ERUpTXzE2X1gsXG59KTtcbm5ldyBDZm5PdXRwdXQoc3RhY2ssICdOT0RFSlNfMTZfWC1mdW5jdGlvbk5hbWUnLCB7IHZhbHVlOiBub2RlMTZ4Zm4uZnVuY3Rpb25OYW1lIH0pO1xuXG5jb25zdCBub2RlMTh4Zm4gPSBuZXcgRnVuY3Rpb24oc3RhY2ssICdOT0RFSlNfMThfWCcsIHtcbiAgY29kZTogbmV3IElubGluZUNvZGUoJ2V4cG9ydHMuaGFuZGxlciA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50KSB7IHJldHVybiBcInN1Y2Nlc3NcIiB9JyksXG4gIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbiAgcnVudGltZTogUnVudGltZS5OT0RFSlNfMThfWCxcbn0pO1xubmV3IENmbk91dHB1dChzdGFjaywgJ05PREVKU18xOF9YLWZ1bmN0aW9uTmFtZScsIHsgdmFsdWU6IG5vZGUxOHhmbi5mdW5jdGlvbk5hbWUgfSk7XG5cbmFwcC5zeW50aCgpO1xuIl19