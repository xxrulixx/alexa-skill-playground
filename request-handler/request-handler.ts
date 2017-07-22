import { LaunchResponse } from './launch-response';
import intentHandler from './intent-handler';

export function requestHandler(req: any) {
    switch(req.body.request.type) {
        case 'LaunchRequest':
            return LaunchResponse;
        
        case 'SessionEndedRequest': 
            // Per the documentation, we do NOT send ANY response... I know, awkward.
            console.log('Session ended', req.body.request.reason);
            break;
        
        case 'IntentRequest':
            return intentHandler(req.body.request.intent);
            
        default: 
            return;
    }
    
}