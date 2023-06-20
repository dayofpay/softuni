function solve(obj) {
    // Copy the input
    const copyObj = {
        ...obj
    };

    // Variables
    const methods = ["GET", "POST", "DELETE", "CONNECT"];
    const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const regex = /^[a-zA-Z.0-9]+$/gm;
    const regexMessage = /[<>&'"\\]/gm;

    // Checks
    if (!copyObj.hasOwnProperty("method") || !methods.includes(copyObj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (
        !copyObj.hasOwnProperty("uri") ||
        !regex.test(copyObj.uri) ||
        copyObj.uri === ""
    ) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (
        !copyObj.hasOwnProperty("version") ||
        !versions.includes(copyObj.version)
    ) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (
        !copyObj.hasOwnProperty("message") ||
        regexMessage.test(copyObj.message)
    ) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return copyObj;
}

const result = solve({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: ""
});
console.log(result);