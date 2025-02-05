import { BskyAgent } from '@atproto/api';
import { CronJob } from 'cron';
import * as process from 'process';


// Create a Bluesky Agent 
const agent = new BskyAgent({
    service: 'https://bsky.social',
  })


async function main() {
    await agent.login({ identifier: process.env.BLUESKY_USERNAME!, password: process.env.BLUESKY_PASSWORD!})
    await agent.post({
        text: "Stoi"
    });
    console.log("Just posted at:", new Date().toISOString());
}

main();


// Run this on a cron job
const scheduleExpressionMinute = '* * * * *'; // Run once every minute for testing
const scheduleExpression = '0 14 * * *'; // Run once per day at 14:00

const job = new CronJob(scheduleExpression, main); // change to scheduleExpressionMinute for testing

job.start();