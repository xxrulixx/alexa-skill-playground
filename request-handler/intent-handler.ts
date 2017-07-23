import { ForecastResponse } from './forecast-response';

export default function intentHandler(intent: any) {
    switch(intent.name) {
        case 'Forecast':
            return handleForecastIntent(intent);
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