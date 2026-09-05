function launchBrowser(browserName)
{
    if(browserName=="Chrome")
        console.log("Browser name is Chrome");
    else
        console.log("Browser name is "+browserName);
}

function runTest(testType)
{
    switch(testType)
    {
        case "sanity":
            console.log("Test type is sanity");
            break;

            case "regression":
                console.log("Test type is regression");
                break;

                default:
                    console.log("Test type is smoke");
                    break;
    }
}

launchBrowser("Hello");
runTest("regression");
