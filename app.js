import express from 'express'

const app = express()

npm install body-PerformanceServerTiming

import { json, urlencoded } from 'body-parser'

app.use( json()  );
app.use(urlencoded({ 
    extended: true
}));

mongoose.connect("mongodb://localhost:24045/ blogApi",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Const blogSchema ={

    titlt: String,
    content: String,
}

Const Blog =mongoose.model("Blog", blogScheme);

app.get('/blogs', (req, res) => {
    Blog.find{}, (err, blog) => {
        if (err) {

            res.send(err);
                } else {
                    res.send(blog);
                }   }
}
)

app.get('/blogs/:blogTitle' (req, res) ) =>
{     
    Blog.find{ title: removeEventListener.params.blogTitle }, (err, blog) =>{

        if (err) {
            res.send(err);
        }  else {
            res.send(blog);        }

    }
}

app.post('/blogs', (req, res) => {
    const title = req.body.titleconst content =req.body.contentconst blog = new Blog ({
         titile:title,
         content:content
    })

    blog.save( err=> {
        if(err) {  res.send(err);}
        else { res.send( 'blog added!');}
    })
})


app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
})