
module.exports = {
  "src_folders": [
    "test/e2e"
  ],
  "output_folder": "./reports",
  "page_objects_path": "pages/",
  "custom_commands_path": "commands/",
  "selenium": {
    "start_process": true,
    "server_path": "bin/selenium-server-standalone-3.3.1.jar",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver" : "bin/chromedriver.exe"
    }
  },
  "test_settings": {
      "default": {
          "globals": {
              "waitForConditionTimeout": 5000,
          },
          "desiredCapabilities": {
              "browserName": "chrome"
          }
      },
      "chrome": {
          "desiredCapabilities": {
              "browserName": "chrome",
              "javascriptEnabled": true
          }
      }
  }
}
