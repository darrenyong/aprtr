View the [live site](https://aprtr.herokuapp.com/)

# Aprtr
![Splash Page](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_login.png)

Aprtr (Aperture) is an image hosting service inspired by Flickr. It is built using the following technologies:
* <strong>Backend</strong>: Ruby on Rails with a PostgreSQL database
* <strong>Frontend</strong>: React.js with Redux
* <strong>Storage</strong>: Rails Active Storage with Amazon's S3
* <strong>Misc</strong>: SCSS, Webpack, Heroku

# Features 
### Current Features
* Uploading, editing and viewing photos
* Viewing user profiles
* User authentication

### Planned Features
* Creating, editing and viewing albums
* Creating and editing comments
* Creating tags

## Photos

### Explore
![Explore Page](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_explore.png)

Once a user has logged in, they can access the Explore Page which acts as a photo
index. All photos uploaded from all users will be shown on this page. Tabs under
the navbar will eventually allow users to view different pages of the site. 

### Uploading
#### Upload Page 1
![Upload Page 1](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_upload1.png)

For the upload feature, there are two different components. One that prompts the
user to choose a file and another for the user to enter information such as title
and description. This was achieved through local state. Choosing a file would call 
a function to modify a variable in local state and render the following page.

```js
// Function to modify local state upon choosing file
handleFile(e) {
  const file = e.currentTarget.files[0];
  const fileReader = new FileReader;
  fileReader.onloadend = () => {   
    this.setState({
      picture: file,
      photoUrl: fileReader.result,
      uploadState: 1
    })
  }
  ...
}

// If-else statement to determine which page to render
let uploadPage = this.state.uploadState

if (uploadPage === 0) {
  return (uploadState0)
} else if (uploadPage === 1) {
  return (uploadState1)
}
```
#### Upload Page 2
![Upload Page 2](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_upload2.png)


### Viewing & Editing
![Photo Show](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_show.png)
![Photo Edit](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_edit.gif)
<!-- the child component. A 
callback to this function is passed down as a prop which would be called when the 
user submits the form. -->

### User Authentication
![User Authentication](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_userAuth.png)
