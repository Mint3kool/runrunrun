const querystring = require("querystring");
const verifyToken = "RUNRUNRUN";
const stravaSubscriptionUrl = "https://www.strava.com/api/v3/push_subscriptions";

class subscriptionService {
  // curl -X POST  \
  // -F client_id=5 \
  // -F client_secret=7b2946535949ae70f015d696d8ac602830ece412 \
  // -F 'callback_url=http://a-valid.com/url' \
  // -F 'verify_token=STRAVA'

  /**
   * Fetches feedback data from the JSON file provided to the constructor
   */
  async createSubscription(clientId, clientSecret, callbackUrl) {
    const stravaSubscriptionUrl =
      stravaSubscriptionUrl +
      "?" +
      querystring.encode({
        client_id: clientId,
        response_type: "code",
        verify_token: verifyToken,
        scope: "read",
      });
  }
}
