// Copyright 2020 Gravity Interactive

/* 

Uberschall takes in arguments, manipulates them into a consice message, logs it, then returns the string it logged back
to you, should you need to use said string for testing or other callbacks

Uberschall takes in three arguments:
    - The message to log, this is a string
    - Where the message came from (ex. your database, or a REST api endpoint), this is a string
    - Whether or not to display a timestamp, this is a boolean
    - (Maybe coming soon) Whether or not to save this event to a logfile, this would be a boolean

*/

/**
 * 
 * @param {object} callData
 * @param {string} callData.msg The message to be logged
 * @param {string} callData.origin Where the message came from
 * @param {boolean} callData.logTime Whether or not to log the timestamp
 */

exports.logGeneral = async function (callData) {
    // this variable holds our final message to be logged
    // it gets augmented as we go through our function params
    let finalMsgConstructor = {
        msg: String,
        origin: String,
        timestamp: String,
    };

    // below we validate our required fields and insert them into our temp constructor obj

    if (!callData || !Object.keys(callData)) {
        const rootErr = new Error(`mate, we're gonna need some params to log this stuff`);
        console.error(rootErr);
        return rootErr;
    }

    if (!callData.msg) {
        const msgErr = new Error(`mate, we're gonna need a message to log`);
        console.error(msgErr)
        return msgErr;
    } else {
        finalMsgConstructor.msg = callData.msg;
    }

    if (!callData.origin) {
        finalMsgConstructor.origin = "Unknown";
    } else {
        finalMsgConstructor.origin = callData.origin
    }

    if (!callData.logTime) {
        finalMsgConstructor.timestamp = "";
    } else {
        const dateHolder = new Date();
        finalMsgConstructor.timestamp = `${dateHolder.getDate()}/${dateHolder.getMonth() + 1}/${dateHolder.getFullYear()} ${dateHolder.getHours()}:${dateHolder.getMinutes()}`;
    }

    // now that all our fields have been cleared, we can log our message
    const constructedMsg = `[${finalMsgConstructor.timestamp}] | [ FROM: ${finalMsgConstructor.origin} ] "${finalMsgConstructor.msg}"`;
    console.log(constructedMsg)
    return constructedMsg;

}