# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Photo.destroy_all
Like.destroy_all
Comment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('photos')
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('likes')
ActiveRecord::Base.connection.reset_pk_sequence!('comments')

User.create!(username: 'user1', profile_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1475112850/1536648_10153300643313893_2943769392509528369_n_ymqsol.jpg')
User.create!(username: 'Kpam', profile_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472944078/14089309_10154002731713893_2435401364054337428_n_cbnt2m.jpg')
User.create!(username: 'SallyMander', profile_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472938130/12308595_10153376057065889_205887642227916082_n_iqbgzf.jpg')
User.create!(username: 'Vyuric', profile_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436799/static1.squarespace-3_iyeesy.jpg')


Photo.create!(description:"Girl & Hands",username:"SallyMander",
             author_id:3, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472938130/12308595_10153376057065889_205887642227916082_n_iqbgzf.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1472768974/girl_and_hands_y20osh.jpg")

Photo.create!(description:"Vanessa with flowers",username:"SallyMander",
             author_id:3, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472938130/12308595_10153376057065889_205887642227916082_n_iqbgzf.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1472768971/stephen_9010-2_rti9cb.jpg")

Photo.create!(description:"Group Photo",username:"Kpam",
             author_id:2, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472944078/14089309_10154002731713893_2435401364054337428_n_cbnt2m.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_814/v1472767620/a1_g7gv2m.jpg")

Photo.create!(description:"kevin",username:"Kpam",
             author_id:2, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472944078/14089309_10154002731713893_2435401364054337428_n_cbnt2m.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1472746902/_MG_8090_kcryvq.jpg")


Photo.create!(description:"Kiyomi in the Desert",username:"SallyMander",
             author_id:3, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472938130/12308595_10153376057065889_205887642227916082_n_iqbgzf.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473181575/IMG_0429_copy_luhghh.jpg")



Photo.create!(description:"Strength",username:"SallyMander",
             author_id:3, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472938130/12308595_10153376057065889_205887642227916082_n_iqbgzf.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473181581/strength_tmze2m.jpg")


Photo.create!(description:"Crocodile Tears",username:"SallyMander",
             author_id:3, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472938130/12308595_10153376057065889_205887642227916082_n_iqbgzf.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473181576/crocodile-tears_x6btuu.jpg")

Photo.create!(description:"Sam in the Light",username:"user1",
             author_id:1, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1475112850/1536648_10153300643313893_2943769392509528369_n_ymqsol.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475644488/Screen_Shot_2016-10-04_at_10.13.48_PM_m1ndro.png")

Photo.create!(description:"Self-Portrait",username:"user1",
             author_id:1, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1475112850/1536648_10153300643313893_2943769392509528369_n_ymqsol.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475643434/Screen_Shot_2016-10-04_at_9.48.43_PM_e1zcgt.png")

Photo.create!(description:"Wilting Flower",username:"Vyuric",
             author_id:4, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436799/static1.squarespace-3_iyeesy.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436073/Screen_Shot_2016-09-09_at_8.38.35_AM_yx5igi.png")

Photo.create!(description:"Lucky Snake",username:"Vyuric",
             author_id:4, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436799/static1.squarespace-3_iyeesy.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436076/Screen_Shot_2016-09-09_at_8.38.51_AM_vzb003.png")

Photo.create!(description:"Tru luv",username:"Vyuric",
             author_id:4, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436799/static1.squarespace-3_iyeesy.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436063/static1.squarespace-2_v4hnf6.jpg")

Photo.create!(description:"Willie & Jasmine",username:"user1",
             author_id:1, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1475112850/1536648_10153300643313893_2943769392509528369_n_ymqsol.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475605205/Screen_Shot_2016-10-04_at_11.16.38_AM_gkrvll.png")

Photo.create!(description:"Vanessa in Orange",username:"user1",
             author_id:1, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1475112850/1536648_10153300643313893_2943769392509528369_n_ymqsol.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475605212/Screen_Shot_2016-10-04_at_11.17.31_AM_cdymzc.png")

Photo.create!(description:"Spaghetti",username:"Vyuric",
             author_id:4, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436799/static1.squarespace-3_iyeesy.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436073/static1.squarespace-1_gzv0dc.jpg")

Photo.create!(description:"Melodrama",username:"Vyuric",
             author_id:4, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436799/static1.squarespace-3_iyeesy.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473436071/static1.squarespace_h8slic.jpg")

Photo.create!(description:"Christmas",username:"Kpam",
             author_id:2, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472944078/14089309_10154002731713893_2435401364054337428_n_cbnt2m.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_1173/v1473437412/_MG_0586_njy7bg.jpg")

Photo.create!(description:"Ridin'",username:"Kpam",
             author_id:2, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472944078/14089309_10154002731713893_2435401364054337428_n_cbnt2m.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_915/v1473437403/_MG_6804_dkqzkq.jpg")

Photo.create!(description:"Unconditional Love",username:"Kpam",
             author_id:2, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472944078/14089309_10154002731713893_2435401364054337428_n_cbnt2m.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1473437330/10704359_10152585715538893_2228425815389816462_o_hdx2nf.jpg")

Photo.create!(description:"Graduation",username:"Kpam",
             author_id:2, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1472944078/14089309_10154002731713893_2435401364054337428_n_cbnt2m.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_1052/v1473437458/grad_arucmt.jpg")

Photo.create!(description:"Temple in Thailand",username:"user1",
             author_id:1, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1475112850/1536648_10153300643313893_2943769392509528369_n_ymqsol.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475605216/Screen_Shot_2016-10-04_at_11.16.14_AM_cnbhim.png")

Photo.create!(description:"Scuba Diving",username:"user1",
             author_id:1, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1475112850/1536648_10153300643313893_2943769392509528369_n_ymqsol.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475645351/Screen_Shot_2016-10-04_at_9.50.03_PM_mlpdfe.png")

Photo.create!(description:"Mission Peak View",username:"user1",
             author_id:1, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1475112850/1536648_10153300643313893_2943769392509528369_n_ymqsol.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475645389/Screen_Shot_2016-10-04_at_9.49.30_PM_flc5yc.png")

Photo.create!(description:"Conchita",username:"user1",
             author_id:1, user_pic: 'http://res.cloudinary.com/dt5viyxyq/image/upload/v1475112850/1536648_10153300643313893_2943769392509528369_n_ymqsol.jpg',
             image_url:"http://res.cloudinary.com/dt5viyxyq/image/upload/v1475645083/Screen_Shot_2016-10-04_at_10.12.59_PM_sxf7oc.png")


Like.create!(author_id:1, photo_id:1)
Like.create!(author_id:1, photo_id:2)
