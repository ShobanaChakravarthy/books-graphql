const data = {
    authors: [
        {id:"1",name:"Shobana", bookIds:["101","102"]},
        {id:"2",name:"Preetha", bookIds:["103"]},
    ],
    books:[
        {id:"101",title:"Life is Good", publishedYear:"2025", authorId:"1"},
        {id:"102",title:"ReactJS", publishedYear:"2024", authorId:"1"},
        {id:"103",title:"Java", publishedYear:"2023", authorId:"2"},
    ]
}
export const resolvers = {
    Book: {
        author: (parent,args,context,info) => {
            return data.authors.find(auth => auth.id===parent.authorId)
        }
    },
    Author: {
        books: (parent) => {
            return data.books.filter(book => parent.bookIds.includes(book.id))
        }
    },
    Query:{
        authors: () => {
            return data.authors;
        },
        books: () => {
            return data.books;
        }
    },
    Mutation:{
        addABook: (parent,args,context,info) => {
            const newBook = {...args, id:data.books.length+1}
            data.books.push(newBook)
            return newBook;
        }
    }
}