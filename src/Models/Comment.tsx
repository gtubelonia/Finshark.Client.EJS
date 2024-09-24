export type CommentPost = {
    title: string;
    content: string;
};

export type CommentGet = {
    title: string;
    content: string;
    createdBy: {
        username: string,
        email: string,
    };
    createdOn: string;
};