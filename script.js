var list =[
    "A closed mouth gathers no feet.",
    "A conclusion is simply the place where you got tired of thinking.",
    "A cynic is only a frustrated optimist.",
    "A fanatic is one who can't change his mind, and won't change the subject.",
    "Do not mistake temptation for opportunity.",
    "He who laughs athimself never runs out of things to laugh at.",
    "He who laughs last is laughing at you.",
    "He who throws dirt is losing ground.",
    "Some men dream of fortunes, others dream of cookies",
    "The greatest danger could be your stupidity.",
    "The world may be your oyster, but it doesn't mean you'll get its pearl.",
    "You can always find happiness at work on Friday.",
    "A tub and a rub will change your day.",
    "Never forget a friend, especially if he owes you.",
    "Only listen to the fortune cookie; disregard all other fortune telling units.",
    "There is no mistake so great as always being right.",
    "Accept that somedays you're the pigeon, and some days you're the statue.",
    "Always keep your words soft and sweet, just in case you have to eat them.",
    "Don't sweat the petty things and don't pet the sweaty things.",
    "If opportunity doesn't knock,build a door.",
    "When everything is coming your way, you're in the wrong lane."
];

var new_list = [];
var current_cookie = 0;

var check = function(item, new_list) {
    for(var i = 0; i < new_list.length; i++) {
        var current_item = new_list[i];
        if(current_item === item){
            return true;
        };
    };
    return false;
};

for(var i = 0; i < list.length; i++) {
    var item = list[Math.floor(Math.random() * list.length)]
    if(check(item, new_list) == false) {
        new_list.push(item);
    };
};

var get_fortune = function() {
    return new_list[current_cookie];
};

var set_fortune = function(fortune) {
    $('p').html(fortune);
};

var change_fortune = function() {
    set_fortune(get_fortune());
    current_cookie += 1;
    if(current_cookie === new_list.length) {
        current_cookie = 0;
    };
    $('p').animate({textShadow: "#000000 0px 2px 5px;"})
};

$(document).ready(function() {
    change_fortune();
    $('button').click(change_fortune)
});