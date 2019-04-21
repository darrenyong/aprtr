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
* [Uploading photos](https://github.com/darrenyong/Aprtr#uploading)
* [Viewing & Editing photos](https://github.com/darrenyong/Aprtr#viewing--editing)
* [Viewing user profiles](https://github.com/darrenyong/Aprtr#user-profile)
* [User authentication](https://github.com/darrenyong/Aprtr#user-authentication)
* [Viewing Albums](https://github.com/darrenyong/aprtr#albums)

### Planned Features
* Creating, editing and viewing albums
* Creating and editing comments
* Creating tags

## Photos
### Uploading
#### Upload Page 1
![Upload Page 1](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_upload1.png)

For the upload feature, there are two different pages. One that prompts the
user to choose a file and another for the user to enter information such as title
and description. This was achieved through local state. Choosing a file would call 
a function to modify a variable in local state and render the next page.

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
*** 
<br>

### Viewing & Editing
#### Photo Explore
![Explore Page](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_explore.png)

Once a user has logged in, they can access the Explore Page which acts as a photo
index. The beautiful and responsive justified grid for the Explore Page was made 
possible through [FastImage](https://github.com/sdsykes/fastimage) and 
[React-Justified-Grid](https://github.com/josephj/react-justified-grid).
All photos uploaded from all users will be shown on this page. Tabs under
the navbar will eventually allow users to view different pages of the site. Clicking 
on a specific photo in the Explore page brings the user to a photo show page.


#### Photo Show
![Photo Show](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_show.png)

On this page, information such as uploader, title and description is displayed about
each photo. Additionally users can choose to delete the photo or edit the title and
description <strong>only if they are the current user</strong>.

#### Photo Edit
![Photo Edit](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_edit.gif)

The edit form only renders if the current user is the same as the uploader. Rendering
the form on click was handled through local state as well. Clicking the section would
call a function that toggles a local state variable and renders the child component. 
A callback to this function is passed down to the child component which would be
called when the user submits the form. Upon submission, the title and description 
would also be updated.

```js
// Function to toggle local state variable
toggleEdit(e) {
  this.setState((oldState) => ({photoEdit: !oldState.photoEdit}))
}

// Function being passed to child Component as a prop
<EditPhotoForm 
  photo={this.props.photo} 
  updatePhoto={this.props.updatePhoto}
  toggleEdit={this.toggleEdit} 
/>

// Edit form on submit callback
handleSubmit(e) {
  e.preventDefault();
  this.props.updatePhoto(this.state);
  this.props.toggleEdit(e);
}
```
*** 
<br>

### Albums
Users are able to view albums and the associated photos in that album. Eventually,
users will be able to create albums and add photos to any albums.
*** 
<br>

### User Profile
![User Profile](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_profile.png)

Clicking on the uploader while in the photo show page will direct a user to the uploader's 
profile. The profile page shows all the photos that a user has uploaded. Tabs under
the header will eventually allow a user to view all the user's photos or albums. 
*** 
<br>

### User Authentication
![User Authentication](https://github.com/darrenyong/Aprtr/blob/master/docs/readme_images/aprtr_auth.png)

User Authentication was made possible through the [BCrypt](https://github.com/codahale/bcrypt-ruby)
gem and Ruby's built in [SecureRandom](https://ruby-doc.org/stdlib-2.5.1/libdoc/securerandom/rdoc/SecureRandom.html) 
module. Users must be logged in to upload photos, however, they are able to view 
specific photos and user profiles without being logged in.