"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_elements_Icons_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Icons.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Icons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/data/icons */ "./resources/js/data/icons.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Get Icons data

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: '',
      iconsFaRegular: _data_icons__WEBPACK_IMPORTED_MODULE_0__["default"].regular,
      iconsFaSolid: _data_icons__WEBPACK_IMPORTED_MODULE_0__["default"].solid,
      iconsFaBrands: _data_icons__WEBPACK_IMPORTED_MODULE_0__["default"].brands,
      iconsSimpleLine: _data_icons__WEBPACK_IMPORTED_MODULE_0__["default"].simpleline
    };
  },
  computed: {
    filteredIconsFaRegular: function filteredIconsFaRegular() {
      var _this = this;

      if (this.search) {
        return this.iconsFaRegular.filter(function (icon) {
          return icon.includes(_this.search);
        });
      } else {
        return this.iconsFaRegular;
      }
    },
    filteredIconsFaSolid: function filteredIconsFaSolid() {
      var _this2 = this;

      if (this.search) {
        return this.iconsFaSolid.filter(function (icon) {
          return icon.includes(_this2.search);
        });
      } else {
        return this.iconsFaSolid;
      }
    },
    filteredIconsFaBrands: function filteredIconsFaBrands() {
      var _this3 = this;

      if (this.search) {
        return this.iconsFaBrands.filter(function (icon) {
          return icon.includes(_this3.search);
        });
      } else {
        return this.iconsFaBrands;
      }
    },
    filteredIconsSimpleLine: function filteredIconsSimpleLine() {
      var _this4 = this;

      if (this.search) {
        return this.iconsSimpleLine.filter(function (icon) {
          return icon.includes(_this4.search);
        });
      } else {
        return this.iconsSimpleLine;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/data/icons.js":
/*!************************************!*\
  !*** ./resources/js/data/icons.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/*
 * Icon arrays
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  "regular": ["address-book", "address-card", "angry", "arrow-alt-circle-down", "arrow-alt-circle-left", "arrow-alt-circle-right", "arrow-alt-circle-up", "bell", "bell-slash", "bookmark", "building", "calendar", "calendar-alt", "calendar-check", "calendar-minus", "calendar-plus", "calendar-times", "caret-square-down", "caret-square-left", "caret-square-right", "caret-square-up", "chart-bar", "check-circle", "check-square", "circle", "clipboard", "clock", "clone", "closed-captioning", "comment", "comment-alt", "comment-dots", "comments", "compass", "copy", "copyright", "credit-card", "dizzy", "dot-circle", "edit", "envelope", "envelope-open", "eye", "eye-slash", "file", "file-alt", "file-archive", "file-audio", "file-code", "file-excel", "file-image", "file-pdf", "file-powerpoint", "file-video", "file-word", "flag", "flushed", "folder", "folder-open", "frown", "frown-open", "futbol", "gem", "grimace", "grin", "grin-alt", "grin-beam", "grin-beam-sweat", "grin-hearts", "grin-squint", "grin-squint-tears", "grin-stars", "grin-tears", "grin-tongue", "grin-tongue-squint", "grin-tongue-wink", "grin-wink", "hand-lizard", "hand-paper", "hand-peace", "hand-point-down", "hand-point-left", "hand-point-right", "hand-point-up", "hand-pointer", "hand-rock", "hand-scissors", "hand-spock", "handshake", "hdd", "heart", "hospital", "hourglass", "id-badge", "id-card", "image", "images", "keyboard", "kiss", "kiss-beam", "kiss-wink-heart", "laugh", "laugh-beam", "laugh-squint", "laugh-wink", "lemon", "life-ring", "lightbulb", "list-alt", "map", "meh", "meh-blank", "meh-rolling-eyes", "minus-square", "money-bill-alt", "moon", "newspaper", "object-group", "object-ungroup", "paper-plane", "pause-circle", "play-circle", "plus-square", "question-circle", "registered", "sad-cry", "sad-tear", "save", "share-square", "smile", "smile-beam", "smile-wink", "snowflake", "square", "star", "star-half", "sticky-note", "stop-circle", "sun", "surprise", "thumbs-down", "thumbs-up", "times-circle", "tired", "trash-alt", "user", "user-circle", "window-close", "window-maximize", "window-minimize", "window-restore"],
  "solid": ["ad", "address-book", "address-card", "adjust", "air-freshener", "align-center", "align-justify", "align-left", "align-right", "allergies", "ambulance", "american-sign-language-interpreting", "anchor", "angle-double-down", "angle-double-left", "angle-double-right", "angle-double-up", "angle-down", "angle-left", "angle-right", "angle-up", "angry", "ankh", "apple-alt", "archive", "archway", "arrow-alt-circle-down", "arrow-alt-circle-left", "arrow-alt-circle-right", "arrow-alt-circle-up", "arrow-circle-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "arrows-alt", "arrows-alt-h", "arrows-alt-v", "assistive-listening-systems", "asterisk", "at", "atlas", "atom", "audio-description", "award", "baby", "baby-carriage", "backspace", "backward", "bacon", "bacteria", "bacterium", "bahai", "balance-scale", "balance-scale-left", "balance-scale-right", "ban", "band-aid", "barcode", "bars", "baseball-ball", "basketball-ball", "bath", "battery-empty", "battery-full", "battery-half", "battery-quarter", "battery-three-quarters", "bed", "beer", "bell", "bell-slash", "bezier-curve", "bible", "bicycle", "biking", "binoculars", "biohazard", "birthday-cake", "blender", "blender-phone", "blind", "blog", "bold", "bolt", "bomb", "bone", "bong", "book", "book-dead", "book-medical", "book-open", "book-reader", "bookmark", "border-all", "border-none", "border-style", "bowling-ball", "box", "box-open", "box-tissue", "boxes", "braille", "brain", "bread-slice", "briefcase", "briefcase-medical", "broadcast-tower", "broom", "brush", "bug", "building", "bullhorn", "bullseye", "burn", "bus", "bus-alt", "business-time", "calculator", "calendar", "calendar-alt", "calendar-check", "calendar-day", "calendar-minus", "calendar-plus", "calendar-times", "calendar-week", "camera", "camera-retro", "campground", "candy-cane", "cannabis", "capsules", "car", "car-alt", "car-battery", "car-crash", "car-side", "caravan", "caret-down", "caret-left", "caret-right", "caret-square-down", "caret-square-left", "caret-square-right", "caret-square-up", "caret-up", "carrot", "cart-arrow-down", "cart-plus", "cash-register", "cat", "certificate", "chair", "chalkboard", "chalkboard-teacher", "charging-station", "chart-area", "chart-bar", "chart-line", "chart-pie", "check", "check-circle", "check-double", "check-square", "cheese", "chess", "chess-bishop", "chess-board", "chess-king", "chess-knight", "chess-pawn", "chess-queen", "chess-rook", "chevron-circle-down", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "child", "church", "circle", "circle-notch", "city", "clinic-medical", "clipboard", "clipboard-check", "clipboard-list", "clock", "clone", "closed-captioning", "cloud", "cloud-download-alt", "cloud-meatball", "cloud-moon", "cloud-moon-rain", "cloud-rain", "cloud-showers-heavy", "cloud-sun", "cloud-sun-rain", "cloud-upload-alt", "cocktail", "code", "code-branch", "coffee", "cog", "cogs", "coins", "columns", "comment", "comment-alt", "comment-dollar", "comment-dots", "comment-medical", "comment-slash", "comments", "comments-dollar", "compact-disc", "compass", "compress", "compress-alt", "compress-arrows-alt", "concierge-bell", "cookie", "cookie-bite", "copy", "copyright", "couch", "credit-card", "crop", "crop-alt", "cross", "crosshairs", "crow", "crown", "crutch", "cube", "cubes", "cut", "database", "deaf", "democrat", "desktop", "dharmachakra", "diagnoses", "dice", "dice-d20", "dice-d6", "dice-five", "dice-four", "dice-one", "dice-six", "dice-three", "dice-two", "digital-tachograph", "directions", "disease", "divide", "dizzy", "dna", "dog", "dollar-sign", "dolly", "dolly-flatbed", "donate", "door-closed", "door-open", "dot-circle", "dove", "download", "drafting-compass", "dragon", "draw-polygon", "drum", "drum-steelpan", "drumstick-bite", "dumbbell", "dumpster", "dumpster-fire", "dungeon", "edit", "egg", "eject", "ellipsis-h", "ellipsis-v", "envelope", "envelope-open", "envelope-open-text", "envelope-square", "equals", "eraser", "ethernet", "euro-sign", "exchange-alt", "exclamation", "exclamation-circle", "exclamation-triangle", "expand", "expand-alt", "expand-arrows-alt", "external-link-alt", "external-link-square-alt", "eye", "eye-dropper", "eye-slash", "fan", "fast-backward", "fast-forward", "faucet", "fax", "feather", "feather-alt", "female", "fighter-jet", "file", "file-alt", "file-archive", "file-audio", "file-code", "file-contract", "file-csv", "file-download", "file-excel", "file-export", "file-image", "file-import", "file-invoice", "file-invoice-dollar", "file-medical", "file-medical-alt", "file-pdf", "file-powerpoint", "file-prescription", "file-signature", "file-upload", "file-video", "file-word", "fill", "fill-drip", "film", "filter", "fingerprint", "fire", "fire-alt", "fire-extinguisher", "first-aid", "fish", "fist-raised", "flag", "flag-checkered", "flag-usa", "flask", "flushed", "folder", "folder-minus", "folder-open", "folder-plus", "font", "football-ball", "forward", "frog", "frown", "frown-open", "funnel-dollar", "futbol", "gamepad", "gas-pump", "gavel", "gem", "genderless", "ghost", "gift", "gifts", "glass-cheers", "glass-martini", "glass-martini-alt", "glass-whiskey", "glasses", "globe", "globe-africa", "globe-americas", "globe-asia", "globe-europe", "golf-ball", "gopuram", "graduation-cap", "greater-than", "greater-than-equal", "grimace", "grin", "grin-alt", "grin-beam", "grin-beam-sweat", "grin-hearts", "grin-squint", "grin-squint-tears", "grin-stars", "grin-tears", "grin-tongue", "grin-tongue-squint", "grin-tongue-wink", "grin-wink", "grip-horizontal", "grip-lines", "grip-lines-vertical", "grip-vertical", "guitar", "h-square", "hamburger", "hammer", "hamsa", "hand-holding", "hand-holding-heart", "hand-holding-medical", "hand-holding-usd", "hand-holding-water", "hand-lizard", "hand-middle-finger", "hand-paper", "hand-peace", "hand-point-down", "hand-point-left", "hand-point-right", "hand-point-up", "hand-pointer", "hand-rock", "hand-scissors", "hand-sparkles", "hand-spock", "hands", "hands-helping", "hands-wash", "handshake", "handshake-alt-slash", "handshake-slash", "hanukiah", "hard-hat", "hashtag", "hat-cowboy", "hat-cowboy-side", "hat-wizard", "hdd", "head-side-cough", "head-side-cough-slash", "head-side-mask", "head-side-virus", "heading", "headphones", "headphones-alt", "headset", "heart", "heart-broken", "heartbeat", "helicopter", "highlighter", "hiking", "hippo", "history", "hockey-puck", "holly-berry", "home", "horse", "horse-head", "hospital", "hospital-alt", "hospital-symbol", "hospital-user", "hot-tub", "hotdog", "hotel", "hourglass", "hourglass-end", "hourglass-half", "hourglass-start", "house-damage", "house-user", "hryvnia", "i-cursor", "ice-cream", "icicles", "icons", "id-badge", "id-card", "id-card-alt", "igloo", "image", "images", "inbox", "indent", "industry", "infinity", "info", "info-circle", "italic", "jedi", "joint", "journal-whills", "kaaba", "key", "keyboard", "khanda", "kiss", "kiss-beam", "kiss-wink-heart", "kiwi-bird", "landmark", "language", "laptop", "laptop-code", "laptop-house", "laptop-medical", "laugh", "laugh-beam", "laugh-squint", "laugh-wink", "layer-group", "leaf", "lemon", "less-than", "less-than-equal", "level-down-alt", "level-up-alt", "life-ring", "lightbulb", "link", "lira-sign", "list", "list-alt", "list-ol", "list-ul", "location-arrow", "lock", "lock-open", "long-arrow-alt-down", "long-arrow-alt-left", "long-arrow-alt-right", "long-arrow-alt-up", "low-vision", "luggage-cart", "lungs", "lungs-virus", "magic", "magnet", "mail-bulk", "male", "map", "map-marked", "map-marked-alt", "map-marker", "map-marker-alt", "map-pin", "map-signs", "marker", "mars", "mars-double", "mars-stroke", "mars-stroke-h", "mars-stroke-v", "mask", "medal", "medkit", "meh", "meh-blank", "meh-rolling-eyes", "memory", "menorah", "mercury", "meteor", "microchip", "microphone", "microphone-alt", "microphone-alt-slash", "microphone-slash", "microscope", "minus", "minus-circle", "minus-square", "mitten", "mobile", "mobile-alt", "money-bill", "money-bill-alt", "money-bill-wave", "money-bill-wave-alt", "money-check", "money-check-alt", "monument", "moon", "mortar-pestle", "mosque", "motorcycle", "mountain", "mouse", "mouse-pointer", "mug-hot", "music", "network-wired", "neuter", "newspaper", "not-equal", "notes-medical", "object-group", "object-ungroup", "oil-can", "om", "otter", "outdent", "pager", "paint-brush", "paint-roller", "palette", "pallet", "paper-plane", "paperclip", "parachute-box", "paragraph", "parking", "passport", "pastafarianism", "paste", "pause", "pause-circle", "paw", "peace", "pen", "pen-alt", "pen-fancy", "pen-nib", "pen-square", "pencil-alt", "pencil-ruler", "people-arrows", "people-carry", "pepper-hot", "percent", "percentage", "person-booth", "phone", "phone-alt", "phone-slash", "phone-square", "phone-square-alt", "phone-volume", "photo-video", "piggy-bank", "pills", "pizza-slice", "place-of-worship", "plane", "plane-arrival", "plane-departure", "plane-slash", "play", "play-circle", "plug", "plus", "plus-circle", "plus-square", "podcast", "poll", "poll-h", "poo", "poo-storm", "poop", "portrait", "pound-sign", "power-off", "pray", "praying-hands", "prescription", "prescription-bottle", "prescription-bottle-alt", "print", "procedures", "project-diagram", "pump-medical", "pump-soap", "puzzle-piece", "qrcode", "question", "question-circle", "quidditch", "quote-left", "quote-right", "quran", "radiation", "radiation-alt", "rainbow", "random", "receipt", "record-vinyl", "recycle", "redo", "redo-alt", "registered", "remove-format", "reply", "reply-all", "republican", "restroom", "retweet", "ribbon", "ring", "road", "robot", "rocket", "route", "rss", "rss-square", "ruble-sign", "ruler", "ruler-combined", "ruler-horizontal", "ruler-vertical", "running", "rupee-sign", "sad-cry", "sad-tear", "satellite", "satellite-dish", "save", "school", "screwdriver", "scroll", "sd-card", "search", "search-dollar", "search-location", "search-minus", "search-plus", "seedling", "server", "shapes", "share", "share-alt", "share-alt-square", "share-square", "shekel-sign", "shield-alt", "shield-virus", "ship", "shipping-fast", "shoe-prints", "shopping-bag", "shopping-basket", "shopping-cart", "shower", "shuttle-van", "sign", "sign-in-alt", "sign-language", "sign-out-alt", "signal", "signature", "sim-card", "sink", "sitemap", "skating", "skiing", "skiing-nordic", "skull", "skull-crossbones", "slash", "sleigh", "sliders-h", "smile", "smile-beam", "smile-wink", "smog", "smoking", "smoking-ban", "sms", "snowboarding", "snowflake", "snowman", "snowplow", "soap", "socks", "solar-panel", "sort", "sort-alpha-down", "sort-alpha-down-alt", "sort-alpha-up", "sort-alpha-up-alt", "sort-amount-down", "sort-amount-down-alt", "sort-amount-up", "sort-amount-up-alt", "sort-down", "sort-numeric-down", "sort-numeric-down-alt", "sort-numeric-up", "sort-numeric-up-alt", "sort-up", "spa", "space-shuttle", "spell-check", "spider", "spinner", "splotch", "spray-can", "square", "square-full", "square-root-alt", "stamp", "star", "star-and-crescent", "star-half", "star-half-alt", "star-of-david", "star-of-life", "step-backward", "step-forward", "stethoscope", "sticky-note", "stop", "stop-circle", "stopwatch", "stopwatch-20", "store", "store-alt", "store-alt-slash", "store-slash", "stream", "street-view", "strikethrough", "stroopwafel", "subscript", "subway", "suitcase", "suitcase-rolling", "sun", "superscript", "surprise", "swatchbook", "swimmer", "swimming-pool", "synagogue", "sync", "sync-alt", "syringe", "table", "table-tennis", "tablet", "tablet-alt", "tablets", "tachometer-alt", "tag", "tags", "tape", "tasks", "taxi", "teeth", "teeth-open", "temperature-high", "temperature-low", "tenge", "terminal", "text-height", "text-width", "th", "th-large", "th-list", "theater-masks", "thermometer", "thermometer-empty", "thermometer-full", "thermometer-half", "thermometer-quarter", "thermometer-three-quarters", "thumbs-down", "thumbs-up", "thumbtack", "ticket-alt", "times", "times-circle", "tint", "tint-slash", "tired", "toggle-off", "toggle-on", "toilet", "toilet-paper", "toilet-paper-slash", "toolbox", "tools", "tooth", "torah", "torii-gate", "tractor", "trademark", "traffic-light", "trailer", "train", "tram", "transgender", "transgender-alt", "trash", "trash-alt", "trash-restore", "trash-restore-alt", "tree", "trophy", "truck", "truck-loading", "truck-monster", "truck-moving", "truck-pickup", "tshirt", "tty", "tv", "umbrella", "umbrella-beach", "underline", "undo", "undo-alt", "universal-access", "university", "unlink", "unlock", "unlock-alt", "upload", "user", "user-alt", "user-alt-slash", "user-astronaut", "user-check", "user-circle", "user-clock", "user-cog", "user-edit", "user-friends", "user-graduate", "user-injured", "user-lock", "user-md", "user-minus", "user-ninja", "user-nurse", "user-plus", "user-secret", "user-shield", "user-slash", "user-tag", "user-tie", "user-times", "users", "users-cog", "users-slash", "utensil-spoon", "utensils", "vector-square", "venus", "venus-double", "venus-mars", "vest", "vest-patches", "vial", "vials", "video", "video-slash", "vihara", "virus", "virus-slash", "viruses", "voicemail", "volleyball-ball", "volume-down", "volume-mute", "volume-off", "volume-up", "vote-yea", "vr-cardboard", "walking", "wallet", "warehouse", "water", "wave-square", "weight", "weight-hanging", "wheelchair", "wifi", "wind", "window-close", "window-maximize", "window-minimize", "window-restore", "wine-bottle", "wine-glass", "wine-glass-alt", "won-sign", "wrench", "x-ray", "yen-sign", "yin-yang"],
  "brands": ["500px", "accessible-icon", "accusoft", "acquisitions-incorporated", "adn", "adobe", "adversal", "affiliatetheme", "airbnb", "algolia", "alipay", "amazon", "amazon-pay", "amilia", "android", "angellist", "angrycreative", "angular", "app-store", "app-store-ios", "apper", "apple", "apple-pay", "artstation", "asymmetrik", "atlassian", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "battle-net", "behance", "behance-square", "bimobject", "bitbucket", "bitcoin", "bity", "black-tie", "blackberry", "blogger", "blogger-b", "bluetooth", "bluetooth-b", "bootstrap", "btc", "buffer", "buromobelexperte", "buy-n-large", "buysellads", "canadian-maple-leaf", "cc-amazon-pay", "cc-amex", "cc-apple-pay", "cc-diners-club", "cc-discover", "cc-jcb", "cc-mastercard", "cc-paypal", "cc-stripe", "cc-visa", "centercode", "centos", "chrome", "chromecast", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "confluence", "connectdevelop", "contao", "cotton-bureau", "cpanel", "creative-commons", "creative-commons-by", "creative-commons-nc", "creative-commons-nc-eu", "creative-commons-nc-jp", "creative-commons-nd", "creative-commons-pd", "creative-commons-pd-alt", "creative-commons-remix", "creative-commons-sa", "creative-commons-sampling", "creative-commons-sampling-plus", "creative-commons-share", "creative-commons-zero", "critical-role", "css3", "css3-alt", "cuttlefish", "d-and-d", "d-and-d-beyond", "dailymotion", "dashcube", "deezer", "delicious", "deploydog", "deskpro", "dev", "deviantart", "dhl", "diaspora", "digg", "digital-ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble-square", "dropbox", "drupal", "dyalog", "earlybirds", "ebay", "edge", "edge-legacy", "elementor", "ello", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "evernote", "expeditedssl", "facebook", "facebook-f", "facebook-messenger", "facebook-square", "fantasy-flight-games", "fedex", "fedora", "figma", "firefox", "firefox-browser", "first-order", "first-order-alt", "firstdraft", "flickr", "flipboard", "fly", "font-awesome", "font-awesome-alt", "font-awesome-flag", "fonticons", "fonticons-fi", "fort-awesome", "fort-awesome-alt", "forumbee", "foursquare", "free-code-camp", "freebsd", "fulcrum", "galactic-republic", "galactic-senate", "get-pocket", "gg", "gg-circle", "git", "git-alt", "git-square", "github", "github-alt", "github-square", "gitkraken", "gitlab", "gitter", "glide", "glide-g", "gofore", "goodreads", "goodreads-g", "google", "google-drive", "google-pay", "google-play", "google-plus", "google-plus-g", "google-plus-square", "google-wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker-news", "hacker-news-square", "hackerrank", "hips", "hire-a-helper", "hooli", "hornbill", "hotjar", "houzz", "html5", "hubspot", "ideal", "imdb", "instagram", "instagram-square", "intercom", "internet-explorer", "invision", "ioxhost", "itch-io", "itunes", "itunes-note", "java", "jedi-order", "jenkins", "jira", "joget", "joomla", "js", "js-square", "jsfiddle", "kaggle", "keybase", "keycdn", "kickstarter", "kickstarter-k", "korvue", "laravel", "lastfm", "lastfm-square", "leanpub", "less", "line", "linkedin", "linkedin-in", "linode", "linux", "lyft", "magento", "mailchimp", "mandalorian", "markdown", "mastodon", "maxcdn", "mdb", "medapps", "medium", "medium-m", "medrt", "meetup", "megaport", "mendeley", "microblog", "microsoft", "mix", "mixcloud", "mixer", "mizuni", "modx", "monero", "napster", "neos", "nimblr", "node", "node-js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki-square", "old-republic", "opencart", "openid", "opera", "optin-monster", "orcid", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "penny-arcade", "periscope", "phabricator", "phoenix-framework", "phoenix-squadron", "php", "pied-piper", "pied-piper-alt", "pied-piper-hat", "pied-piper-pp", "pied-piper-square", "pinterest", "pinterest-p", "pinterest-square", "playstation", "product-hunt", "pushed", "python", "qq", "quinscape", "quora", "r-project", "raspberry-pi", "ravelry", "react", "reacteurope", "readme", "rebel", "red-river", "reddit", "reddit-alien", "reddit-square", "redhat", "renren", "replyd", "researchgate", "resolving", "rev", "rocketchat", "rockrms", "rust", "safari", "salesforce", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "shopify", "shopware", "simplybuilt", "sistrix", "sith", "sketch", "skyatlas", "skype", "slack", "slack-hash", "slideshare", "snapchat", "snapchat-ghost", "snapchat-square", "soundcloud", "sourcetree", "speakap", "speaker-deck", "spotify", "squarespace", "stack-exchange", "stack-overflow", "stackpath", "staylinked", "steam", "steam-square", "steam-symbol", "sticker-mule", "strava", "stripe", "stripe-s", "studiovinari", "stumbleupon", "stumbleupon-circle", "superpowers", "supple", "suse", "swift", "symfony", "teamspeak", "telegram", "telegram-plane", "tencent-weibo", "the-red-yeti", "themeco", "themeisle", "think-peaks", "tiktok", "trade-federation", "trello", "tripadvisor", "tumblr", "tumblr-square", "twitch", "twitter", "twitter-square", "typo3", "uber", "ubuntu", "uikit", "umbraco", "uniregistry", "unity", "unsplash", "untappd", "ups", "usb", "usps", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo-square", "viber", "vimeo", "vimeo-square", "vimeo-v", "vine", "vk", "vnv", "vuejs", "waze", "weebly", "weibo", "weixin", "whatsapp", "whatsapp-square", "whmcs", "wikipedia-w", "windows", "wix", "wizards-of-the-coast", "wolf-pack-battalion", "wordpress", "wordpress-simple", "wpbeginner", "wpexplorer", "wpforms", "wpressr", "xbox", "xing", "xing-square", "y-combinator", "yahoo", "yammer", "yandex", "yandex-international", "yarn", "yelp", "yoast", "youtube", "youtube-square", "zhihu"],
  "simpleline": ["action-redo", "action-undo", "anchor", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "badge", "bag", "ban", "bar-chart", "basket", "basket-loaded", "bell", "book-open", "briefcase", "bubble", "bubbles", "bulb", "calculator", "calendar", "call-end", "call-in", "call-out", "camcorder", "camera", "check", "chemistry", "clock", "close", "cloud-download", "cloud-upload", "compass", "control-end", "control-forward", "control-pause", "control-play", "control-rewind", "control-start", "credit-card", "crop", "cup", "cursor", "cursor-move", "diamond", "direction", "directions", "disc", "dislike", "doc", "docs", "drawer", "drop", "earphones", "earphones-alt", "emoticon-smile", "energy", "envelope", "envelope-letter", "envelope-open", "equalizer", "eye", "eyeglasses", "feed", "film", "fire", "flag", "folder", "folder-alt", "frame", "game-controller", "ghost", "globe", "globe-alt", "graduation", "graph", "grid", "handbag", "heart", "home", "hourglass", "info", "key", "layers", "like", "link", "list", "lock", "lock-open", "login", "logout", "loop", "magic-wand", "magnet", "magnifier", "magnifier-add", "magnifier-remove", "map", "microphone", "mouse", "moustache", "music-tone", "music-tone-alt", "note", "notebook", "paper-clip", "paper-plane", "pencil", "picture", "pie-chart", "pin", "plane", "playlist", "plus", "pointer", "power", "present", "printer", "puzzle", "question", "refresh", "reload", "rocket", "screen-desktop", "screen-smartphone", "screen-tablet", "settings", "share", "share-alt", "shield", "shuffle", "size-actual", "size-fullscreen", "social-dribbble", "social-dropbox", "social-facebook", "social-tumblr", "social-twitter", "social-youtube", "speech", "speedometer", "star", "support", "symbol-female", "symbol-male", "tag", "target", "trash", "trophy", "umbrella", "user", "user-female", "user-follow", "user-following", "user-unfollow", "users", "vector", "volume-1", "volume-2", "volume-off", "wallet", "wrench"]
});

/***/ }),

/***/ "./resources/js/views/elements/Icons.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/elements/Icons.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icons_vue_vue_type_template_id_b3e1ccbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons.vue?vue&type=template&id=b3e1ccbe& */ "./resources/js/views/elements/Icons.vue?vue&type=template&id=b3e1ccbe&");
/* harmony import */ var _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons.vue?vue&type=script&lang=js& */ "./resources/js/views/elements/Icons.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icons_vue_vue_type_template_id_b3e1ccbe___WEBPACK_IMPORTED_MODULE_0__.render,
  _Icons_vue_vue_type_template_id_b3e1ccbe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/elements/Icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/elements/Icons.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/elements/Icons.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Icons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Icons.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/elements/Icons.vue?vue&type=template&id=b3e1ccbe&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/elements/Icons.vue?vue&type=template&id=b3e1ccbe& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_b3e1ccbe___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_b3e1ccbe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_b3e1ccbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Icons.vue?vue&type=template&id=b3e1ccbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Icons.vue?vue&type=template&id=b3e1ccbe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Icons.vue?vue&type=template&id=b3e1ccbe&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Icons.vue?vue&type=template&id=b3e1ccbe& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("base-page-heading", {
        attrs: {
          title: "Icons",
          subtitle:
            "A huge collection of multi-purpose, uniquely designed, font icons.",
        },
        scopedSlots: _vm._u([
          {
            key: "extra",
            fn: function () {
              return [
                _c(
                  "b-breadcrumb",
                  { staticClass: "breadcrumb-alt" },
                  [
                    _c(
                      "b-breadcrumb-item",
                      { attrs: { href: "javascript:void(0)" } },
                      [_vm._v("Elements")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Icons"),
                    ]),
                  ],
                  1
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content" },
        [
          _c("div", { staticClass: "input-group input-group-lg push" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search",
                },
              ],
              staticClass: "js-icon-search form-control font-size-base",
              attrs: { type: "text", placeholder: "Try home or user.." },
              domProps: { value: _vm.search },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                },
              },
            }),
            _vm._v(" "),
            _vm._m(0),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: {
                rounded: "",
                title:
                  "(" +
                  _vm.filteredIconsFaRegular.length +
                  ") Font Awesome Regular",
                "btn-option-content": "",
              },
              scopedSlots: _vm._u([
                {
                  key: "subtitle",
                  fn: function () {
                    return [
                      _c("small", { staticClass: "text-lowercase" }, [
                        _c("code", [_vm._v("far fa-*")]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-2x text-center" },
                _vm._l(_vm.filteredIconsFaRegular, function (icon, index) {
                  return _c(
                    "b-col",
                    {
                      key: "far-icon-" + index,
                      attrs: { sm: "6", lg: "4", xl: "3" },
                    },
                    [
                      _c("p", [_c("i", { class: "far fa-2x fa-" + icon })]),
                      _vm._v(" "),
                      _c("code", [_vm._v(_vm._s(icon))]),
                    ]
                  )
                }),
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: {
                rounded: "",
                title:
                  "(" +
                  _vm.filteredIconsFaSolid.length +
                  ") Font Awesome Solid",
                "btn-option-content": "",
              },
              scopedSlots: _vm._u([
                {
                  key: "subtitle",
                  fn: function () {
                    return [
                      _c("small", { staticClass: "text-lowercase" }, [
                        _c("code", [_vm._v("fa fa-*")]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-2x text-center" },
                _vm._l(_vm.filteredIconsFaSolid, function (icon, index) {
                  return _c(
                    "b-col",
                    {
                      key: "fa-icon-" + index,
                      attrs: { sm: "6", lg: "4", xl: "3" },
                    },
                    [
                      _c("p", [_c("i", { class: "fa fa-2x fa-" + icon })]),
                      _vm._v(" "),
                      _c("code", [_vm._v(_vm._s(icon))]),
                    ]
                  )
                }),
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: {
                rounded: "",
                title:
                  "(" +
                  _vm.filteredIconsFaBrands.length +
                  ") Font Awesome Brands",
                "btn-option-content": "",
              },
              scopedSlots: _vm._u([
                {
                  key: "subtitle",
                  fn: function () {
                    return [
                      _c("small", { staticClass: "text-lowercase" }, [
                        _c("code", [_vm._v("fab fa-*")]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-2x text-center" },
                _vm._l(_vm.filteredIconsFaBrands, function (icon, index) {
                  return _c(
                    "b-col",
                    {
                      key: "fab-icon-" + index,
                      attrs: { sm: "6", lg: "4", xl: "3" },
                    },
                    [
                      _c("p", [_c("i", { class: "fab fa-2x fa-" + icon })]),
                      _vm._v(" "),
                      _c("code", [_vm._v(_vm._s(icon))]),
                    ]
                  )
                }),
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: {
                rounded: "",
                title:
                  "(" +
                  _vm.filteredIconsSimpleLine.length +
                  ") Simple Line Icons",
                "btn-option-content": "",
              },
              scopedSlots: _vm._u([
                {
                  key: "subtitle",
                  fn: function () {
                    return [_c("small", [_c("code", [_vm._v("si si-*")])])]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-2x text-center" },
                _vm._l(_vm.filteredIconsSimpleLine, function (icon, index) {
                  return _c(
                    "b-col",
                    {
                      key: "si-icon-" + index,
                      attrs: { sm: "6", lg: "4", xl: "3" },
                    },
                    [
                      _c("p", [_c("i", { class: "si fa-2x si-" + icon })]),
                      _vm._v(" "),
                      _c("code", [_vm._v(_vm._s(icon))]),
                    ]
                  )
                }),
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fa fa-search" }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);