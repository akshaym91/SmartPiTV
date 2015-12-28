// import AppBar from 'material-ui/lib/app-bar';
injectTapEventPlugin();
var {
    AppCanvas,
    AppBar,
    Avatar,
    Card,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText,
    CardActions,
    FlatButton,
    Tabs,
    Tab,
    Styles
    } = MUI;

App = React.createClass ({

  render () {
    return (
      <div>
        <header>
            <AppBar
              title="Smart Pi TV"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </header>
        <Tabs >
          <Tab label="Watch" value="a" >
            <div>
              <h2 style={Styles.headline}>Watch a video stream</h2>
                <section>
                  <Card>
                    <CardHeader
                      title="Youtube"
                      subtitle="Stream from Youtube"
                      avatar="http://a1.mzstatic.com/us/r30/Purple3/v4/d6/e4/12/d6e41207-d0ee-96c5-6f9d-e789c6e4caf7/icon256.png"/>
                    <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
                      <img src="http://marketingland.com/wp-content/ml-loads/2014/08/youtube-iconsbkgd-fade-1920.jpg"/>
                    </CardMedia>
                    <CardTitle title="Title" subtitle="Subtitle"/>
                    <CardActions>
                      <FlatButton label="Action1"/>
                      <FlatButton label="Action2"/>
                    </CardActions>
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                  </Card>
                  <Card>
                    <CardHeader
                      title="Vimeo"
                      subtitle="Stream from Vimeo"
                      avatar="http://esnlisboa.org/sites/default/files/imce/vimeo-icon.png"/>
                    <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
                      <img src="http://iac.com/sites/default/files-new/styles/310_206/public/Vimeo-SCREENSHOT.jpg?itok=8Bg7aPos"/>
                    </CardMedia>
                    <CardTitle title="Title" subtitle="Subtitle"/>
                    <CardActions>
                      <FlatButton label="Action1"/>
                      <FlatButton label="Action2"/>
                    </CardActions>
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                  </Card>
                </section>
            </div>
          </Tab>
          <Tab label="Play" value="b">
            <div>
              <h2 style={Styles.headline}>Stream a video</h2>
              <p>
                This is another example of a controllable tab. Remember, if you
                use controllable Tabs, you need to give all of your tabs values or else
                you wont be able to select them.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
});
