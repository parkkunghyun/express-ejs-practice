const path = require('path') // 이거는 경로를 파악하기 위해 사용!
const express = require('express')
const bodyParser = require('body-parser') //이거는 데이터를 우리가 알아보기 편하게 가공해준다!

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views') //views, 템플릿이 있는 디렉토리!


//app.use 는 지정된 경로에 지정된 미들웨어 함수를 마운트합니다 . 
//미들웨어 함수는 요청된 경로의 기준이 일치할 때 실행됩니다 path.

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})) //이러면데이터 알아보게줌

app.use(express.static(path.join(__dirname, 'public')))
//이러면 css같은 정적인 파일들을 제공하기 위해 사용!

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use( (req,res,next) => {
    res.status(404).render('404',{pageTitle: 'Page Not Found!'})
})

app.listen(2500);