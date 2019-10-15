import reducerDialogs, { writeNewMessageactionCreator, showListOfDialogsActionCreator, showDialogWihUser } from "../reducers/reducerDialogs"

const state={
     arrayOfListDialogs:[],
     arrayOfMessage:[]
}

it('write new message is correct', () => {
     let message = {
          text: "Hello world!",
          userId: '123'
     }

     let action = (writeNewMessageactionCreator(message))

     let newState = reducerDialogs(state, action)

     expect(newState.arrayOfMessage[0].text).toBe(message.text)
     expect(newState.arrayOfMessage[0].id).toBe(message.userId)
})

it('SHOW LIST OF DIALOGS is correct', () => {
     let arrayOfListDialogs = [
          {
               withUserName:"Hello",
               withUserId:"world!"
          }
     ]

     let action = showListOfDialogsActionCreator(arrayOfListDialogs)

     let newState = reducerDialogs(state, action)

     expect(newState.arrayOfListDialogs[0].withUserName).toBe(arrayOfListDialogs[0].withUserName)
     expect(newState.arrayOfListDialogs[0].withUserId).toBe(arrayOfListDialogs[0].withUserId)
})

it('show dialog with user is correct', () => {
     let arrayOfMessage = [
          {
               id: "hello",
               text: "world"
          }
     ]

     let action = showDialogWihUser(arrayOfMessage)

     let newState = reducerDialogs(state, action)

     expect(newState.arrayOfMessage[0].text).toBe(arrayOfMessage[0].text)
     expect(newState.arrayOfMessage[0].id).toBe(arrayOfMessage[0].id)
})