# FlipThru

[FlipThru Live[host]

[host]: http://flipthru.herokuapp.com


FlipThru is a single page full-stack application, showcasing UI/UX certain UI/UX elements of Instagram.

<a href="http://flipthru.herokuapp.com">
  <img style="border:1px solid #ededed" src="https://raw.githubusercontent.com/kpam92/flip_thru/master/app/assets/images/screenshot.png"/>
</a>

## Features & Implementation

### Users

  Users have a "username" and "profile_pic" url.

  ```javascript
  const exampleItemState = {
    1: {
      id: 1,
      username: "user1",
      profile_pic: "https://www.example.com/image1"
    },
    2: {
      id: 2,
      username: "Widget",
      profile_pic: "https://www.example.com/image2"
      }
    }
  };
  ```
### Photos

Photos consist of an "image_url", "description", and "author_id". Because every photo displayed on the feed is accompanied by the author's profile_pic and username, the database tables where then denormalized to avoid excessive querying, and each photo contains both "user_pic" and "username".

  ```javascript
  const examplePhotoState = {
  1: {
    image_url: 'https://www.example.com/image3',
    description: 'skydiving',
    user_pic: 'https://www.example.com/image1',
    username: 'user1'
    }
  };
  ```
When a user is fetched from the database and placed in state to show their profile, the jbuilder view also fetches all the user's photos through a partial. This makes it more accessible in the user state to extrapolate all photos to display.

  ```javascript
  json.extract! user, :id, :username, :profile_pic

  json.photos do
    json.partial! 'api/photos/photo', collection: user.photos, as: :photo
  end
  ```

The `TotalAmount` component renders each variable above, and state changes through actions involving item creation,edit, and deletion.

## Actions
  The actions below occur when the user creates, edits, and deletes items.

### Likes

  Items have three actions, receiveItem(item), updateItem(item), and removeItem(item_id). Each of these, except removeItem, takes an entire item as an argument, and either adds it to state, or updates its existing copy. removeItem finds and deletes the object in state with matching id.

### Total Amount

  The first action that deals with total amount is changeAmount(oldAmount,newAmount), which takes an old amount, and the new amount. This is called after each of three item actions. the old amount is subtracted from the new amount, and the result is then added to the states subtotal; calculations for the new tax and new grand total follow.
  ```javascript

  // Used for creating a new item
  changeAmount(0, 100) // diff = (100 - 0); newState.subTotal += diff

  // Used for deleting an item
  changeAmount(100, 0) // diff = (0 - 100); newState.subTotal += diff

  // Used for editing an item
  changeAmount(100,50) // diff = (50 - 100); newState.subTotal += diff

  ```

  The second action, changeTax(tax), takes in a number as an argument, and alters the currTax of the amount state. When this is called after submission of the tax form in the component, it changes the currTax, then calls changeAmount(0,0) to update the other values with the new tax.

## Future Directions for the Project

I plan to add small adjustments to the project to provide better UX for the user

### Jest Testing

In process of implementing Jest tests on Redux reducers.

### Save and Edit Invoices

Right now, the user can only create one invoice at a time. In the future, user will be able to save entire invoices and start creating new ones. Tabs of saved invoices will appear on the bottom of the screen, and will be available to be viewed and edited when clicked on.
