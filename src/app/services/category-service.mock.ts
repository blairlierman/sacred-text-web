import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CategoryServiceMock {
    category = [
        {
            id: 0,
            name: "Prologue",
            description: "When one begins the study of God, there has to be a basic truth that there is value in the 'other'.  The formal religion builds walls but the empathy we show others allows us to see the beauty and spiritual in all humanity."
        },
        {
            id: 1,
            name: "Ultimate Reality",
            description: "Religions denote Ultimate Reality in various ways. If one contrasts the personal God of Christianity, Islam, and Judaism with the impersonal Absolute of Hindu Vedanta, one may infer that each religion has its distinctive way of apprehending the Absolute. However, it is more accurate to consider a variety of images of the Absolute even though important distinctions are to be made between similar images in different religions."
        },
        {
            id: 2,
            name: "Divine Law",
            description: "Is the Divine Law the absolute truth?  The universe is fundamentally moral, an expression of the workings of a Divine principle or natural law."
        },
        {
            id: 3,
            name: "The Purpose of Life",
            description: "The purpose of life could be the realization of what is most essentially human.  Do humans manifest the 'God' in themselves through purity, wisdom, impartiality, integrity and compassion? People desire happiness as well as inner satisfaction."
        },
        {
            id: 4,
            name: "Life Beyond Death",
            description: "All religions affirm that there is an aspect of the human person that lives on beyond our physical life.  There are many passages of scripture from many religions that speak of this phenomenon."
        },
    ];

    // category_subcategory = [
    //     {
    //         categoryId: 0,
    //         subCategoryId: 0
    //     }
    // ];
    
    // /* Category ID */ [SubCategory IDs]
    category_subcategory = [
        /*0*/ [0],
        /*1*/ [1,2,3],
        /*2*/ [4,5,6],
        /*3*/ [7,8,9,10,11,12,13,14],
        /*4*/ [15,16,17,18],
    ];

    subCategory = [
        {
            id: 0,
            name: "Respect for all Beliefs",
            description: ""
        },
        {
            id: 1,
            name: "Existence of God",
            description: "Can we ever prove the existence of God?  Is he invisible? How do we know when we have discovered him? Proving God's existence has been a task of the wise men for ages. But those who seek find evidence."
        }, 
        {
            id: 2,
            name: "The Creator",
            description: "Much maligned and disputed, the creation of man and earth remain a mystery known only by the creator."
        },  
        {
            id: 3,
            name: "Goodness and Love",
            description: "The goodness of God is the highest aspect of God's personality.  He is loving, beautiful, truthful, compassionate, and faithful in personal terms."
        },
        {
            id: 4,
            name: "The Golden Rule",
            description: "The Golden Rule is the essence to almost all religions based upon the principle of ethics."
        },
        {
            id: 5,
            name: "Moral Law",
            description: "Most religions teach that there is a single standard of law that applies to all people.  In Hinduism there are different dharmas for people of dharmas for people of different social status, stages of life and quality of inborn nature."
        },
        {
            id: 6,
            name: "Cosmic Justice",
            description: "Is the world ruled by justice?  Is there such thing as divine retribution or karma? It depends on the religion as in Judaism, Christianity, and Islam it is a God who executes judgment to maintain justice but Hinduism and Buddhism address the principle of justice as being inherent in the fabric of the cosmos."
        },
        {
            id: 7,
            name: "Joy and Happiness",
            description: "The search for happiness is one of the basic desires from human life as well as the purpose of religion. Be it Nirvana or bliss or heaven, the goal of the religious journey is a state of intoxicating joy."
        },
        {
            id: 8,
            name: "Image of God",
            description: "In Judaism and Christianity, human beings are regarded as created in the image of God. In Hindu the Self is immutable and ever-present manifestation of Ultimate Reality present in each person."
        },
        {
            id: 9,
            name: "True Love",
            description: "When an individual realizes Truth and chooses to fulfill God's purpose for his/her life, he/she comes to embody universal love, delighting in the well-being of others."
        },
        {
            id: 10,
            name: "Equality",
            description: "Equality of all people is proclaimed in the scriptures of all faiths.  Male and female, rich and poor, of any race or caste this is true."
        },
        {
            id: 11,
            name: "Ideal Society",
            description: "Liberty, justice, kindness and peace make an ideal society."
        },
        {
            id: 12,
            name: "Family",
            description: "We have responsibility to our family. Traditional roles may be questioned but sacred text point out the importance of the keeping close to those who love you and who you respect."
        },
        {
            id: 13,
            name: "Reverence for Life",
            description: "Non-violence toward all living things prescribe the proper ethic for life.  Humans are trusted to take care of the world including the proper management of natural resources, agriculture, animal husbandry, hunting and forestry."
        },
        {
            id: 14,
            name: "Sanctity of Nature",
            description: "Human beings are just one species.  We live on an earth that has many species and we must find a way to live in harmony with all of them.  We are responsible for our environment and help ease the balance of nature."
        },
        {
            id: 15,
            name: "Mystery",
            description: "We would all like to know what the spiritual world \"looks like\" in today's world.  We are unable to see as clearly as we might like, the appearances of spiritual beings and their knowledge of us."
        },
        {
            id: 16,
            name: "Eternity",
            description: "Most religions do not give us much information on the reality of a future life, and we know very little about a future life ourselves.  For those who prepare for death during their lives, death is not something to be feared.  But those who do not consider their own death risk having regrets at the end of their life."
        },
        {
            id: 17,
            name: "Heaven",
            description: "Most religions have some concept of a heaven and a hell.  They are described with vivid images and can be frightening to those who read.  But none of them give us a physical place where these things are located.  Some feel it is a state-of-mind as we live here on earth."
        },
        {
            id: 18,
            name: "Hell",
            description: "Hell is described through most of the sacred texts as a place of burning fire and boiling water, bitter cold and being eaten alive.  There is no relief from these unpleasant feelings for eternity."
        },
    ]
}
