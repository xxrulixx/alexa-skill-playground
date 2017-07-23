import { ForecastResponse } from './forecast-response';
import { GoodByeResponse } from './goodbye-response';
import { StaffResponse } from './staff-response';

export default function intentHandler(intent: any) {
    console.log('- handling intent: ' + intent.name);

    switch(intent.name) {
        case 'Forecast':
            return handleForecastIntent(intent);

        case 'Staff':
            return StaffResponse;

        case 'AMAZON.CancelIntent': 
            return GoodByeResponse;
    }   
}

function handleForecastIntent(intent: any) {
    if (!intent.slots.Day || !intent.slots.Day.value) {
      // Handle this error by producing a response like:
      // "Hmm, what day do you want to know the forecast for?"
    }

    let day = new Date(intent.slots.Day.value);

    // Do your business logic to get weather data here!
    // Then send a JSON response...

    return ForecastResponse;
}

//  