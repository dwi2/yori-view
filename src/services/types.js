export const ACTION_TYPES = {
  GET_PHOTOS: "GET_PHOTOS",
  GET_PHOTO: "GET_PHOTO",
  UPDATE_PHOTO: "UPDATE_PHOTO",
  DELETE_PHOTO: "DELETE_PHOTO",
  CREATE_PHOTO_GROUP: "CREATE_PHOTO_GROUP",
  CREATE_PHOTO_COSTUME: "CREATE_PHOTO_COSTUME",
  CREATE_PHOTO_MEMBER: "CREATE_PHOTO_MEMBER",
  CREATE_PHOTO_TYPE: "CREATE_PHOTO_TYPE",
  CREATE_PHOTO_NUMBER: "CREATE_PHOTO_NUMBER"
};

export const STORE_TYPES = {
  STATE: {
    TOP: {
      META: "top",
      PHOTOS: "photos"
    },
    CREATE: {
      META: "create",
      GROUP: "group",
      COSTUME: "costume",
      MEMBER: "member"
    }
  }
};

export const END_POINTS = {
  PHOTO: "/photos/all"
};
