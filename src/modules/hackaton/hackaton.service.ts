/* eslint-disable prettier/prettier */
import { Injectable, HttpStatus, Inject, HttpException } from '@nestjs/common';
import { PredictionServiceClient } from '@google-cloud/aiplatform';

@Injectable()
export class HackatonService {
  // constructor() {}
  
  public async sendImage(data) {
    const ENDPOINT_ID="629615542436626432";
    const PROJECT_ID="hackaton-355614";
    const INPUT_DATA_FILE="INPUT-JSON";
    // console.log(`funciona:`, data.buffer.toString());
    console.log(`funciona:`, data.filename);
    
    const client = new PredictionServiceClient();
    client.initialize();
    // Do something with DatasetServiceClient.
    // console.log('client', client);
    
    console.log(await client.getProjectId());

    const test_data = {
      "endpoint": `https://us-central1-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/us-central1/endpoints/${ENDPOINT_ID}:predict`,
      "instances": [{
        structValue: {
          fields: data.filename
        }
      }]
    };

    const response = await client.predict(test_data);
    console.log('response', response);

    return {
      message: `103 kl`
    };
  }
}
