# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'date'




ingredients_names = [
    "Billy",
    "Samantha",
    "James",
    "Sarah",
    "Peter",
    "Bobby",
    "Lilly",
    "Jenefer",
    "Ameright",
    "AmyTale",
    "AnhartGutsy",
    "Annipol",
    "Arnhoto",
    "Aspri",
    "Awarmajo",
    "Beaster",
    "BeatKai",
    "BeeFamous",
    "BeeTricky",
    "BloggerSan",
    "Bornda",
    "BornDiddy",
    "BrightTracker",
    "Brunhyama",
    "BuffyTown",
    "BulletinBroadcast",
    "CartTeam",
    "Casexylo",
    "Catawal",
    "Censific",
    "CornyTins",
    "Degelida",
    "Deluxedn",
    "Deskil",
    "DeskStorm",
    "Diaryco",
    "Dollow",
    "Endevra",
    "Eponyse",
    "Estinger",
    "ExpertDj",
    "Fostext",
    "Fromanico",
    "Futurcidi",
    "GambitVamp",
    "Genusten",
    "Gingeriddi",
    "Gurlyri",
    "Habiarybo",
    "Hippooder",
    "Hockeyni",
    "Horrayno",
    "Hyperol",
    "IfallGutsy",
    "IneedUpdate",
    "Initerac",
    "Invadeca",
    "Janhe",
    "Jubiianes",
    "KnotAsh",
    "Kroolab",
    "Labson",
    "LightTy",
    "LikeSincere",
    "Linxitre",
    "LuvWitty",
    "Magazinetidi",
    "MagicChone",
    "Markkirb",
    "Megsat",
    "Mexicom",
    "Mitokomat",
    "MuraSheer",
    "Musickimb",
    "Newskina",
    "NoteAra",
    "Peachlo",
    "Pemcopton",
    "PhatDubya",
    "Pinchin",
    "Ployerry",
    "Powervisa",
    "Puppyfo",
    "Quicksoun",
    "Ridatafo",
    "SandBlonde",
    "Shmoeci",
    "SlipkWeekly",
    "Stasiati",
    "Stoople",
    "TalesTrimble",
    "TaraLedger",
    "TasticGroup",
    "Terramput",
    "TightMercy",
    "Tinkerli",
    "Tipsag",
    "Toontilm",
    "Tracker",
    "TreasureKnight",
    "Tuckhora",
    "Uplestom",
    "Vanatery",
    "VashPerson",
    "Waldribar",
    "WannaIfall",
    "WindGazette",
    "Womanettr",
    "Chad"
]



recipe = {
    name: [
        "Flamiche",
        "Arrope",
        "Aavakaaya",
        "Ambrosia (fruit salad)",
        "Apple crisp",
        "Chutney",
        "Clafoutis",
        "Clementine cake",
        "Cobbler (food)",
        "Coconut jam",
        "Pate Chinois",
        "Lekvar",
        "Lörtsy",
        "Mincemeat",
        "Murabba",
        "Peach Melba",
        "Pickled fruit",
        "Sour cherry soup",
        "Spotted dick",
        "Strawberry Delight",
        "Tanghulu",
        "Tarte des Alpes",
        "Tarte Tatin",
        "Tomato jam",
        "Ajiaco",
        "Baked potato",
        "Boxty",
        "Chorrillana",
        "Croquette",
        "Beşbarmaq",
        "Birria"
    ],
    description: "\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dui efficitur, pulvinar odio a, commodo tellus. In enim massa, faucibus et porta a, rutrum nec mauris. Morbi tincidunt mi vel dolor fringilla convallis. Fusce fringilla eros convallis nisi pretium commodo. Vivamus laoreet gravida quam, nec accumsan risus sodales vitae. Curabitur non nulla efficitur, commodo ipsum in, egestas urna. Donec condimentum nunc ut augue hendrerit, eu posuere urna mollis. Integer tempus condimentum elit. Nam vehicula ligula lorem, a gravida elit fringilla sed. In bibendum condimentum dui, in posuere lorem rhoncus sit amet. Nunc accumsan sem quis risus faucibus maximus. Nam iaculis bibendum mauris. Etiam tincidunt in felis sed porttitor.\

    Sed eget turpis orci. Praesent vel hendrerit lectus. Donec non orci at dui feugiat efficitur. Proin elementum, nisi a gravida ullamcorper, nunc nulla suscipit ipsum, quis aliquet massa erat quis urna. Donec tempus vitae eros at pulvinar. Phasellus id finibus justo. Ut sed mi nec orci lobortis pharetra. Suspendisse fringilla fermentum ante sed placerat. Nullam maximus mollis metus vitae dapibus.\

    Integer varius congue orci, id euismod urna cursus vel. Praesent iaculis orci tortor, porttitor faucibus purus vehicula nec. Integer nec orci vitae tortor tincidunt vulputate. Nunc eu nisl nisl. Nunc lobortis pulvinar faucibus. Nam augue massa, varius nec enim vel, ultricies blandit quam. Phasellus placerat dui vel ipsum auctor, at porta diam pharetra. Pellentesque vulputate, leo elementum venenatis iaculis, odio nulla tempor quam, et lacinia quam felis et eros. In commodo egestas metus a vulputate. Etiam ultricies ipsum vel elit luctus, nec congue lorem consectetur. Nulla nec augue dui. Ut risus massa, mattis sit amet felis nec, egestas tempus leo. Nam ut pretium metus. Vivamus non dapibus enim, in sagittis ante. Suspendisse non euismod nulla. Sed et mi porttitor, congue lacus eu, sagittis ex.\

    Duis sit amet massa sagittis, sagittis nisl eu, rutrum ligula. Curabitur erat dolor, feugiat quis facilisis ac, tincidunt quis nisi. Nulla mattis faucibus bibendum. Integer vel sapien libero. Mauris faucibus odio nec quam consequat, a scelerisque mi aliquam. Morbi rutrum lorem in dui feugiat malesuada. Donec feugiat blandit ante vel gravida. Proin eget condimentum lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis imperdiet ipsum sed velit congue, ac maximus quam convallis. Praesent nibh lorem, semper ut sagittis id, viverra eget erat. Cras condimentum massa ac velit iaculis sodales. In lacinia leo sed odio suscipit fermentum. Ut quis massa nec turpis maximus auctor eu eget leo. Phasellus iaculis nisi nibh, eu varius nunc elementum ut.\

    Phasellus mattis auctor eros. In blandit eget arcu at elementum. Integer et ipsum nec magna auctor dignissim in eget lacus. Sed euismod augue in risus varius molestie. Donec pharetra odio vitae massa tincidunt luctus. Nulla ac nibh ligula. Proin quam lorem, pellentesque sit amet diam quis, vulputate tincidunt lacus. Phasellus at urna in risus cursus vestibulum. Nullam vestibulum lobortis suscipit. Curabitur ut condimentum neque, eget sodales turpis. Maecenas sodales libero sit amet arcu laoreet, sit amet aliquet nibh sagittis. Morbi interdum erat sed justo tincidunt semper.
    "
}


units = [
    "","",
    "kg","kg",
    "lbs","lbs",
    "pintches",
    "tsp",
    "ml"
]


storage = [
    "Bin",
    "Pantry",
    "Cupboard",
    "Fridge",
    "Cabinet",
    "Ouside Barrel",
    "The Stash Behind the TV",
    "The Bottom of the River",
    "Sally's Kitchen Cabinet",
    "Under my Sister's Bed"
]


def random_date
    
    month = rand(12)+1
    day = rand(28)+1
    str_date = "2020-#{month}-#{day}"
    DateTime.parse(str_date)
    
    
=begin
    formatted_date = date.strftime('%a %b %d %Y')
    puts formatted_date
=end
end


desc_array = recipe[:description].split('.')






# =>    Pantry Item
#
#        - name         :  ingredients_names[]
#        - quantity     :  rand(int)
#        - units        :  units[]
#
#        - storage_bin  :  storage[]
#
#        - when_bought  :  random_date()   <datetime>
#        - exp_date     :  random_date()^  + rand(int)   <datetime>
#
#        - min_item     :  rand(int)
#        - max_item     :  rand(int)^  + rand(int)




# =>    UserRecipe

#        - name         :  ingredients_names[] 
#        - description  :  recipe[:description].split('.')   <<random ammount of sentences
# =>    est_time



# => =>   Ingredient

#           - name         :  ingredients_names[] 
#           - amount       :  rand(int)
#           - units        :  units[]



# => =>   Instruction

#           - step :   recipe[:description].split('.')[rand(int)] ~ish






#puts recipe[:description].split('.')
#puts [(rand(60)+1)].map(&:to_a).flatten


=begin
200.times do |number|
    if ( rand(60)+1 == 60 )
        puts "60"
    elsif ( rand(60)+1 == 1 )
        puts "1"
    elsif ( rand(60)+1 == 0 )
        puts " - - 0 - -"
    end
end
=end

#est_time
=begin
20.times do
    num = (rand(12)+1) * 5
    puts num
end
=end
=begin
20.times do
    puts random_date.strftime('%a %b %d, %Y')
end
=end

# - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - 
10.times do |index|

    o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
    email_name = (0...20).map { o[rand(o.length)] }.join
    
      
    User.create!({
          
        :email => "#{email_name}@gmail.com", 
        :password => "111111", 
        :password_confirmation => "111111",
          
        :username => ingredients_names[ rand(ingredients_names.length()) ],
        :name_first => ingredients_names[ rand(ingredients_names.length()) ],
        :name_last => ingredients_names[ rand(ingredients_names.length()) ],
         
    })
    
    
    # =>    Pantry Items
    # up to 100 items, minimum 20
    (rand(81) + 20).times do
        
        day = random_date()
        min = rand(5) + 1
        
        User.last.pantry_items.create!({ 
            
            :name => ingredients_names[ rand(ingredients_names.length()) ],
            :quantity => rand(20) + 1,
            :units => units[ rand(units.length()) ],
            :storage_bin => storage[ rand(storage.length()) ],
            :when_bought => day,
            :exp_date => day + rand(80),
            :min_item => min,
            :max_item => min + rand(12) + (rand(3) + 1)
        })
    end
    
    
    
    # =>    User Recipes
    rand(9).times do
        
        desc = ""
        
        (rand(10) + 4).times do
            desc += desc_array[ rand(desc_array.length()) ]
        end
        
        
        User.last.user_recipes.create!({ 
            
            :name => ingredients_names[ rand(ingredients_names.length()) ],
            :description => desc,
            :est_time => (rand(12)+1) * 5
        })


        # max 20 ingredients
        (rand(18) + 3).times do
            User.last.user_recipes.last.ingredients.create!({
                
                :name => ingredients_names[ rand(ingredients_names.length()) ], 
                :amount => rand(15) + 1,
                :unit => units[ rand(units.length()) ]
            })
        end
        
        # max 20 instructions
        (rand(19) + 2).times do
            User.last.user_recipes.last.instructions.create!({
                
                :step => desc_array[ rand(desc_array.length()) ] + "."
            })
        end
    end
  
end