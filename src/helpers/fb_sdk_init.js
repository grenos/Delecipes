export default (fbAsyncInit = function() {
  FB.init({
    appId: 'your-app-id',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v3.0'
  });
});
