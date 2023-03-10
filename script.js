const MAIN_STORY = document.querySelector(".main_story")
const CARDBACK = document.querySelector(".openingCardBack")
const OPENED_CONTENT = document.querySelector(".openedContent")


// -------------------------------------fetch---------------------------------------------


const API_URL = 'https://api.github.com/users';


fetch(API_URL)
  .then(API_DATA => API_DATA.json())
  .then(data => {

    return data.map(user => {

      const USERS = {
        IMG_URL: user.avatar_url,
        TYPE: user.type,
        LOGIN: user.login,
        ID: user.id,
        FOLLOWERS_URL: user.followers_url,
        FOLLOWING_URL: user.following_url,
        SITE_ADMIN: user.site_admin,
        SUBSCRIPTION_URL: user.subscriptions_url
      }


      // Create Elements
      // Card
      const OPENING = document.createElement("div")
      const CARD = document.createElement("div");
      const IMG_DIV = document.createElement("div")
      const IMG = document.createElement("img")

      CARD.setAttribute("id", USERS.ID)
      // Story
      const STORY_HEADER = document.createElement("div");
      const STORY_USER_IMG_DIV = document.createElement("div");
      const STORY_USER_IMG = document.createElement("img");
      const STORY_USER_NAME = document.createElement("h3");
      const STORY_USER_LIST_DIV = document.createElement("div");
      const STORY_USER_LIST_GIT = document.createElement("a");
      const STORY_USER_LIST_ID = document.createElement("span");
      const STORY_USER_LIST_SITE_ADMIN = document.createElement("span");
      const STORY_USER_LIST_FOLLOWERS_URL = document.createElement("a");
      const STORY_USER_LIST_FOLLOWING_URL = document.createElement("a");
      const STORY_USER_LIST_SUBSCRIPTION = document.createElement("a");

      // Add class
      // Card
      CARD.classList.add("card")
      IMG_DIV.classList.add("card-img-div")
      IMG.classList.add("story-img")
      // Story
      OPENING.classList.add("opening")
      STORY_HEADER.classList.add("story-header")
      STORY_USER_IMG_DIV.classList.add("story-user-img-div")
      STORY_USER_IMG.classList.add("story-user-img")
      STORY_USER_NAME.classList.add("story-user-name")
      STORY_USER_LIST_DIV.classList.add("story-user-list-div")

      STORY_USER_LIST_GIT.classList.add("story-user-list-git")

      // Card append
      CARD.appendChild(IMG_DIV)
      IMG_DIV.appendChild(IMG)

      // ----------
      IMG.src = USERS.IMG_URL

      OPENED_CONTENT.appendChild(OPENING)
      MAIN_STORY.appendChild(CARD)




      CARD.addEventListener("click", () => {
        CARDBACK.style.display = "block"
        OPENING.style.display = "block"


        
      if (CARDBACK.style.display = "block") {
        document.body.classList.add("disable")

      } else {
        document.body.classList.remove("disable")
      }

        // Story append
        OPENING.appendChild(STORY_HEADER)
        STORY_HEADER.appendChild(STORY_USER_IMG_DIV)
        STORY_USER_IMG_DIV.appendChild(STORY_USER_IMG)
        STORY_HEADER.appendChild(STORY_USER_NAME)
        OPENING.appendChild(STORY_USER_LIST_DIV)
        STORY_USER_LIST_DIV.appendChild(STORY_USER_LIST_GIT)
        STORY_USER_LIST_DIV.appendChild(STORY_USER_LIST_ID)
        STORY_USER_LIST_DIV.appendChild(STORY_USER_LIST_SITE_ADMIN)
        STORY_USER_LIST_DIV.appendChild(STORY_USER_LIST_FOLLOWERS_URL)
        STORY_USER_LIST_DIV.appendChild(STORY_USER_LIST_FOLLOWING_URL)
        STORY_USER_LIST_DIV.appendChild(STORY_USER_LIST_SUBSCRIPTION)

        STORY_USER_IMG.src = USERS.IMG_URL
        STORY_USER_NAME.innerText = USERS.TYPE
        STORY_USER_LIST_ID.innerText = "The User's Id: " + USERS.ID
        STORY_USER_LIST_FOLLOWERS_URL.innerText = "URL: Followers"
        STORY_USER_LIST_FOLLOWERS_URL.href = USERS.FOLLOWERS_URL
        STORY_USER_LIST_FOLLOWING_URL.innerText = "URL: Followings"
        STORY_USER_LIST_FOLLOWING_URL.href = USERS.FOLLOWING_URL
        USERS.SITE_ADMIN === false ?
          STORY_USER_LIST_SITE_ADMIN.innerText = ("The User Is Admin") :
          STORY_USER_LIST_SITE_ADMIN.innerText = ("The User Is'n Admin")
        // STORY_USER_LIST_SITE_ADMIN.innerText = USERS.SITE_ADMIN

        STORY_USER_LIST_SUBSCRIPTION.href = USERS.SUBSCRIPTION_URL
        STORY_USER_LIST_SUBSCRIPTION.innerText = "URL: SUBSCRIPTION"


      })
      CARDBACK.addEventListener("click", () => {
        CARDBACK.style.display = "none"
        OPENING.style.display = "none"
      })
    });
  })
