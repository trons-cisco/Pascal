import xapi from 'xapi';

//This is a fun Macro built for playing with the 16 new LED colors available on the Wall Mount Navigator
//MODES
//Set the LED Control to Auto
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-auto') &&
 (event.Type === 'clicked')) {
  xapi.Config.UserInterface.LedControl.Mode
    .set('Auto');
 }});

//Set the LED Control to Manual
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-manual') &&
 (event.Type === 'clicked')) {
  xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
 }});

//Set the LED Control to OFF
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-off') &&
 (event.Type === 'clicked')) {
  xapi.Config.UserInterface.LedControl.Mode
    .set('Off');
 }});

//RAINBOW MODE
//Rotate through the Rainbow Colors with a 2 second break in between each color


//Here starts the "Color Control" tab
//Green
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-green') &&
 (event.Type === 'clicked')) {
  xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'green' });
 }});
//Yellow
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-yellow') &&
 (event.Type === 'clicked')) {
  xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'yellow' });
 }});
//Red
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-red') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
  xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'red' });
 }});
 //Purple
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-purple') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'purple' });
 }});
  //Blue
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-blue') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'blue' });
 }});
  //Orange
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-orange') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'orange' });
 }});
 //Orchid
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-orchid') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'orchid' });
 }});
  //Aquamarine
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-aquamarine') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'aquamarine' });
 }});
  //Fuchsia
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-fuchsia') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'fuchsia' });
 }});
  //Violet
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-violet') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'violet' });
 }});
  //Magenta
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-magenta') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'magenta' });
 }});
  //Scarlet
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-scarlet') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'scarlet' });
 }});
  //Lime
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-lime') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'lime' });
 }});
  //Gold
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-gold') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'gold' });
 }});
  //Turquoise
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-turquoise') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'Turquoise' });
 }});
   //Cyan
 xapi.event.on('UserInterface Extensions Widget Action', (event) => {
 if ((event.WidgetId === 'pascal-cyan') &&
 (event.Type === 'clicked')) {
   xapi.Config.UserInterface.LedControl.Mode
    .set('Manual');
    xapi.Command.UserInterface.LedControl.Color.Set(
    { Color: 'Cyan' });
 }});

//LOG MON
//Needs fixing
//xapi.event.on('UserInterface Extensions Widget Action', (event) => {
// if ((event.WidgetId === 'pascal-off') &&
// (event.Type === 'clicked')) {
// console.log(event.WidgetId, 'changed to',
// event.Value);
// }});