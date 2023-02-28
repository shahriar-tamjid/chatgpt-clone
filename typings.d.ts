interface Message {
  text: string;
  createdAt: OfflineAudioCompletionEventInit.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
