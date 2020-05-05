// @flow strict

type Config = {|
    API_URL: string,
    EVENTS_URL: ?string,
    FEEDBACK_URL: string,
    REQUIRE_ACCESS_TOKEN: boolean,
    ACCESS_TOKEN: ?string,
    MAX_PARALLEL_IMAGE_REQUESTS: number
|}

const config: Config = {
    API_URL: 'https://tiles.vietmaps.vn',
    get EVENTS_URL() {
        if (!this.API_URL) {
            return null;
        }
        if (this.API_URL.indexOf('https://api.vietmap.vn') === 0) {
            return 'https://events.vietmap.vn/events/v2';
        } else if (this.API_URL.indexOf('https://api.vietmap.com') === 0) {
            return 'https://events.vietmap.com/events/v2';
        } else {
            return null;
        }
    },
    FEEDBACK_URL: 'https://apps.vietmap.com/feedback',
    REQUIRE_ACCESS_TOKEN: true,
    ACCESS_TOKEN: null,
    MAX_PARALLEL_IMAGE_REQUESTS: 16
};

export default config;
