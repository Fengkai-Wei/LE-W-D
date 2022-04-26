var storyContent = ﻿{"inkVersion":19,"root":[["\n","\n","\n","\n","\n","\n","^You approach a small city in the midnight, where all sorts of vipers and leeches breed in. <hl_pos>Evils</hl_pos> and <hl_pos>Sins</hl_pos> creep underneathe every vessel, waiting for any potential victims, and then break their mind as soon as possible.","\n","^As a new heretic instructor of a LEWD faith, your mission is to convert believes of dissents minds, regardless of their race, social class, even... more.","\n","ev","str","^continue","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["\n",{"->":"before_start"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"days":["ev",{"VAR?":"Day"},1,"+",{"VAR=":"Day","re":true},"/ev","ev",10,"/ev",{"VAR=":"Actions","re":true},"ev",{"VAR?":"Weather"},"lrnd","/ev",{"VAR=":"TodayWeather","re":true},"\n",["ev",{"VAR?":"Day"},7,"%",0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"Gold"},{"VAR?":"WeeklyExpense"},"-",{"VAR=":"Gold","re":true},"/ev","^In Week ","ev",{"VAR?":"Day"},7,"/","out","/ev","^, ","ev",{"VAR?":"WeeklyExpense"},"out","/ev","^ Gold rooked by all sorts of tricks of Merchants.","\n",{"->":"days.17"},null]}],"nop","\n","^Today is day ","ev",{"VAR?":"Day"},"out","/ev","^ in this city. It's ","ev",{"VAR?":"TodayWeather"},"out","/ev","^ outside.","\n",["ev",{"VAR?":"Day"},100,"<","/ev",{"->":".^.b","c":true},{"b":["\n","^Where should I do missionary work?","\n",{"->":"daily_interaction"},{"->":"days.33"},null]}],["ev",{"VAR?":"Day"},100,">=","/ev",{"->":".^.b","c":true},{"b":["\n","^The last day comes...","\n",{"->":"final_event"},{"->":"days.33"},null]}],"nop","\n",{"#f":1}],"conflict_check":[{"temp=":"opp_stat"},{"temp=":"stat"},"ev",{"VAR?":"stat"},{"VAR?":"opp_stat"},"-","/ev",{"temp=":"diff"},["ev",{"VAR?":"diff"},-1,{"VAR?":"diff"},"*",50,">=","||","/ev",{"->":".^.b","c":true},{"b":["\n",["ev",20,15,{"f()":"roll_dice"},"/ev",{"->":".^.b","c":true},{"b":["\n","^The conflict is end before it starts.","\n",["ev",{"VAR?":"diff"},0,">","/ev",{"->":".^.b","c":true},{"b":["\n","ev",1,"/ev","~ret",{"->":".^.^.^.5"},null]}],[{"->":".^.b"},{"b":["\n","ev",0,"/ev","~ret",{"->":".^.^.^.5"},null]}],"nop","\n",{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":["\n","ev",10,{"VAR?":"diff"},10.0,"/","+","/ev",{"temp=":"thres"},["ev",20,{"VAR?":"thres"},{"f()":"roll_dice"},"/ev",{"->":".^.b","c":true},{"b":["\n","ev",1,"/ev","~ret",{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","ev",0,"/ev","~ret",{"->":".^.^.^.11"},null]}],"nop","\n",{"->":".^.^.^.3"},null]}],"nop","\n",{"->":".^.^.^.9"},null]}],"nop","\n",{"#f":1}],"roll_dice":[{"temp=":"thres"},{"temp=":"range"},"ev",1,{"VAR?":"range"},"rnd","/ev",{"temp=":"result"},"\n",["ev",{"VAR?":"result"},{"VAR?":"thres"},">=","/ev",{"->":".^.b","c":true},{"b":["\n","ev",1,"/ev","~ret",{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","ev",0,"/ev","~ret",{"->":".^.^.^.11"},null]}],"nop","\n",{"#f":1}],"common_end_checker":[["ev",{"VAR?":"HealthCondition"},0,"<=","/ev",{"->":".^.b","c":true},{"b":["\n","^Although the Lord giveth you the chance to survive, the fresh body you have can not endure physical torture anymore...","\n","ev",1,"/ev","~ret",{"->":".^.^.^.3"},null]}],["ev",{"VAR?":"Stress"},100,">=","/ev",{"->":".^.b","c":true},{"b":["\n","^And if you gaze long into an abyss, the abyss also gazes into you. Clearly, the abyss gazes deeper...","\n","ev",1,"/ev","~ret",{"->":".^.^.^.3"},null]}],["ev",{"VAR?":"Day"},25,">",{"VAR?":"ConvertCount"},2,"<","&&","/ev",{"->":".^.b","c":true},{"b":["\n","^Maybe you haven't forgot the mission, but the mission forgets you. Without the power, you eternally trapped in the city.","\n","ev",1,"/ev","~ret",{"->":".^.^.^.3"},null]}],"nop","\n",{"#f":1}],"gold_checker":[["ev",{"VAR?":"Gold"},0,"<","/ev",{"->":".^.b","c":true},{"b":["\n","ev","str","^I am in debt... of ","ev",{"VAR?":"Gold"},"_","out","/ev","^ Gold.","/str","/ev","~ret",{"->":".^.^.^.3"},null]}],["ev",{"VAR?":"Gold"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev","str","^I am pennyiless now. Hey, Bin, spare me some money!","/str","/ev","~ret",{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":["\n","ev","str","^I still have ","ev",{"VAR?":"Gold"},"out","/ev","^ Gold.","/str","/ev","~ret",{"->":".^.^.^.3"},null]}],"nop","\n",{"#f":1}],"health_checker":[["ev",{"VAR?":"HealthCondition"},25,"<=","/ev",{"->":".^.b","c":true},{"b":["\n","ev","str","^I need ambulance...","/str","/ev","~ret",{"->":".^.^.^.6"},null]}],["ev",{"VAR?":"HealthCondition"},10,"<=","/ev",{"->":".^.b","c":true},{"b":["\n","ev","str","^ASPIRINE ASPIRINE ASPIRINE ASPIRINE","/str","/ev","~ret",{"->":".^.^.^.6"},null]}],["ev",{"VAR?":"HealthCondition"},75,">=","/ev",{"->":".^.b","c":true},{"b":["\n","ev","str","^I am energtic now.","/str","/ev","~ret",{"->":".^.^.^.6"},null]}],["ev",{"VAR?":"HealthCondition"},90,">=","/ev",{"->":".^.b","c":true},{"b":["\n","ev","str","^POWEROVERWHELMING","/str","/ev","~ret",{"->":".^.^.^.6"},null]}],["ev",{"VAR?":"HealthCondition"},100,">","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"activated_special_events"},{"list":{"activated_special_events.Special_event_chain_activation":2}},"+",{"VAR=":"activated_special_events","re":true},"/ev","ev","str","^Faster, Higher, Stronger.","/str","/ev","~ret",{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["\n","ev","str","^My condition is just so-so.","/str","/ev","~ret",{"->":".^.^.^.6"},null]}],"nop","\n",{"#f":1}],"stress_checker":["ev",{"VAR?":"Stress"},20,"/","/ev",{"temp=":"stress_level"},["ev",{"VAR?":"stress_level"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev","str","^I feel relaxed... so far...","/str","/ev","~ret",{"->":".^.^.^.11"},null]}],["ev",{"VAR?":"stress_level"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev","str","^I need some ways to release my stress.","/str","/ev","~ret",{"->":".^.^.^.11"},null]}],["ev",{"VAR?":"stress_level"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev","str","^Dopamine could be only my friend.","/str","/ev","~ret",{"->":".^.^.^.11"},null]}],["ev",{"VAR?":"stress_level"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev","str","^Concentration...Concentration...Concent...","/str","/ev","~ret",{"->":".^.^.^.11"},null]}],["ev",{"VAR?":"stress_level"},4,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"activated_special_events"},{"list":{"activated_special_events.Special_event_chain_activation":2}},"+",{"VAR=":"activated_special_events","re":true},"/ev","ev","str","^***********!!!*****!**!*******!***...","/str","/ev","~ret",{"->":".^.^.^.11"},null]}],"nop","\n",{"#f":1}],"luck_checker":["ev",10,{"VAR?":"Luck"},10.0,"/","-","/ev",{"temp=":"thres"},["ev",20,{"VAR?":"thres"},{"f()":"roll_dice"},"/ev",{"->":".^.b","c":true},{"b":["\n","ev",1,"/ev","~ret",{"->":".^.^.^.10"},null]}],[{"->":".^.b"},{"b":["\n","ev",0,"/ev","~ret",{"->":".^.^.^.10"},null]}],"nop","\n",{"#f":1}],"special_event_checker":[{"temp=":"repeat"},{"temp=":"event_log"},["ev",{"VAR?":"repeat"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",0,"/ev","~ret",{"->":".^.^.^.3"},null]}],"nop","\n",{"#f":1}],"special_event_generator":["ev",{"VAR?":"Time"},"lrnd","/ev",{"temp=":"time"},"\n","ev",{"VAR?":"NPC"},"lrnd","/ev",{"temp=":"npc"},"\n","ev",{"VAR?":"Location"},"lrnd","/ev",{"temp=":"location"},"\n","ev",{"VAR?":"time"},{"VAR?":"location"},{"VAR?":"npc"},{"f()":"underline_keys"},"/ev",{"temp=":"event"},"\n",["ev",{"VAR?":"random_events"},{"VAR?":"event"},"?","/ev",{"->":".^.b","c":true},{"b":["\n","^Deja vu.","\n",{"->":".^.^.^.28"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"random_events"},{"VAR?":"event"},"+",{"VAR=":"random_events","re":true},"/ev",{"->":".^.^.^.28"},null]}],"nop","\n",{"#f":1}],"underline_keys":[{"temp=":"key3"},{"temp=":"key2"},{"temp=":"key1"},"ev","str","ev",{"VAR?":"key1"},"out","/ev","^_","ev",{"VAR?":"key2"},"out","/ev","^_","ev",{"VAR?":"key3"},"out","/ev","/str","/ev","~ret",{"#f":1}],"before_start":[["^Looking at the city a few miles away, you decide to:","\n",["ev",{"^->":"before_start.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Advance to this weird city...",{"->":"$r","var":true},null]}],["ev",{"^->":"before_start.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Enter this discussting...nest",{"->":"$r","var":true},null]}],["ev",{"^->":"before_start.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Turn around, and find safer places to go.",{"->":"$r","var":true},null]}],["ev",{"^->":"before_start.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Camp outside the city.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"before_start.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^with determination.","\n",{"->":"initial_status"},{"#f":5}],"c-1":["ev",{"^->":"before_start.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"^ with hesitation.","\n",{"->":"initial_status"},{"#f":5}],"c-2":["ev",{"^->":"before_start.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"end_coward"},{"#f":5}],"c-3":["ev",{"^->":"before_start.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"camp_outside"},{"#f":5}]}],{"#f":1}],"initial_status":["ev",0,{"VAR?":"All_init_points"},"rnd","/ev",{"VAR=":"Violance","re":true},"\n","ev",0,{"VAR?":"All_init_points"},"rnd","/ev",{"VAR=":"Diplomacy","re":true},"\n","ev",0,{"VAR?":"All_init_points"},"rnd","/ev",{"VAR=":"Stewardship","re":true},"\n","ev",0,{"VAR?":"All_init_points"},"rnd","/ev",{"VAR=":"Knowledge","re":true},"\n","ev",0,{"VAR?":"All_init_points"},"rnd","/ev",{"VAR=":"Intrigue","re":true},"\n","ev",{"list":{}},"/ev",{"VAR=":"random_events","re":true},"ev",{"VAR?":"Blessing"},"lrnd","/ev",{"VAR=":"Bless","re":true},"\n",{"->":"unlock_military_camp"},{"#f":1}],"unlock_military_camp":[["^<div><p class=\"shake\">\"Hey, You! Remove your Hood!\"</p></div>A guard shouts to you, \"And regisiter your profile here!\".","\n","ev","str","^Thanks a lot.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"unlock_city_council"},"\n",{"#f":5}]}],{"#f":1}],"unlock_city_council":[["^You entered the city council.","\n","ev","str","^Thanks a lot.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"unlock_bank"},"\n",{"#f":5}]}],{"#f":1}],"unlock_bank":[["^You entered the bank.","\n","ev","str","^Thanks a lot.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"unlock_school"},"\n",{"#f":5}]}],{"#f":1}],"unlock_school":[["^You entered the school.","\n","ev","str","^Thanks a lot.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"unlock_agency"},"\n",{"#f":5}]}],{"#f":1}],"unlock_agency":[["^You entered the agency.","\n","ev","str","^Thanks a lot.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"begin_mission"},"\n",{"#f":5}]}],{"#f":1}],"begin_mission":[["^Now I know the basic game rule of this city.","\n","ev","str","^Let's begin.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"days"},"\n",{"#f":5}]}],{"#f":1}],"daily_interaction":[[["ev",{"VAR?":"Actions"},0,">","/ev",{"->":".^.b","c":true},{"b":["\n","^I still have spare time...","\n",{"->":".^.^.^.2"},null]}],[{"->":".^.b"},{"b":["\n","^I am exhausted...","\n",{"->":".^.^.^.2"},null]}],"nop","\n",["ev",{"VAR?":"Actions"},0,">","/ev",{"->":".^.b","c":true},{"b":["\n","ev","str","^Millitary Camp","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^City Council","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Bank","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^School","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^Agency","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^Why not...","/str",{"VAR?":"activated_special_events"},"LIST_ALL","LIST_COUNT",{"VAR?":"activated_special_events"},"LIST_COUNT","-",0,">","/ev",{"*":".^.c-5","flg":5},{"->":".^.^.^.5"},{"c-0":[{"->":"militray_daily_event"},"\n",{"#f":5}],"c-1":[{"->":"council_daily_event"},"\n",{"#f":5}],"c-2":[{"->":"bank_daily_event"},"\n",{"#f":5}],"c-3":[{"->":"school_daily_event"},"\n",{"#f":5}],"c-4":[{"->":"agency_daily_event"},"\n",{"#f":5}],"c-5":["^Why not...","<>","\n",{"->":"special_random_event_starter"},{"#f":5}]}]}],"nop","\n","ev","str","^Everything is done.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ One day more. Anotherday, another destiny.","\n","ev",0,"/ev",{"temp=":"night_exp"},["ev",{"VAR?":"Actions"},-2,"<=",{"VAR?":"Actions"},-5,">","&&","/ev",{"->":".^.b","c":true},{"b":["\n","^night_exp += 1","\n",["ev",{"VAR?":"night_exp"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"Time"},{"VAR?":"night"},"+",{"VAR=":"Time","re":true},"/ev",{"#":"You unlocked time: night."},{"->":".^.^.^.4"},null]}],"nop","\n",{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"HealthCondition"},{"VAR?":"Actions"},"+",{"VAR=":"HealthCondition","re":true},"/ev",{"->":"daily_check"},{"#f":5}]}],{"#f":1}],"daily_check":[["^At the end of day...","\n",["ev",{"f()":"common_end_checker"},"/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"end_common"},{"->":".^.^.^.3"},null]}],"nop","\n","ev",{"f()":"gold_checker"},"out","/ev","\n","ev",{"f()":"health_checker"},"out","/ev","\n","ev",{"f()":"stress_checker"},"out","/ev","\n","ev",{"VAR?":"ConvertCount"},"out","/ev","^ people is diverted...","\n","ev","str","^Okay.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"days"},"\n",{"#f":5}]}],{"#f":1}],"militray_daily_event":[["^militray_daily_event","\n","ev",{"VAR?":"Actions"},2,"-",{"VAR=":"Actions","re":true},"/ev","ev","str","^Done.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"daily_interaction"},"\n",{"#f":5}]}],{"#f":1}],"council_daily_event":[["^council_daily_event","\n","ev",{"VAR?":"Actions"},2,"-",{"VAR=":"Actions","re":true},"/ev","ev","str","^Done.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"daily_interaction"},"\n",{"#f":5}]}],{"#f":1}],"bank_daily_event":[["^bank_daily_event","\n","ev",{"VAR?":"Actions"},2,"-",{"VAR=":"Actions","re":true},"/ev","ev","str","^Done.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"daily_interaction"},"\n",{"#f":5}]}],{"#f":1}],"school_daily_event":[["^school_daily_event","\n","ev",{"VAR?":"Actions"},2,"-",{"VAR=":"Actions","re":true},"/ev","ev","str","^Done.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"daily_interaction"},"\n",{"#f":5}]}],{"#f":1}],"agency_daily_event":[["^agency_daily_event","\n","ev",{"VAR?":"Actions"},2,"-",{"VAR=":"Actions","re":true},"/ev","ev","str","^Done.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"daily_interaction"},"\n",{"#f":5}]}],{"#f":1}],"final_event":[["^This is the last event.","\n","ev","str","^Finally.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"end_final"},"\n",{"#f":5}]}],{"#f":1}],"end_coward":["end",{"#f":1}],"end_common":["^Common end.","\n","end",{"#f":1}],"end_final":["^Final event ending.","\n","end",{"#f":1}],"test":[{"temp=":"list"},"ev",{"VAR?":"idx"},{"f()":"list","var":true},"out","/ev","\n",["ev",{"VAR?":"idx"},3,"<=","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"idx"},"out","/ev","\n","^function(list)","\n",{"->":"test.9"},null]}],[{"->":".^.b"},{"b":["\n","ev","str","^D","/str","/ev","~ret",{"->":"test.9"},null]}],"nop","\n",{"#f":1}],"camp_outside":[["^Sitting at the campfire. You decide to","\n",["ev",{"^->":"camp_outside.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"activated_special_events"},{"VAR?":"touch_with_who_event"},"!?","/ev",{"*":".^.^.c-0","flg":3},{"s":["^Sleep anyway.",{"->":"$r","var":true},null]}],["ev",{"^->":"camp_outside.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"activated_special_events"},{"VAR?":"touch_with_who_event"},"?","/ev",{"*":".^.^.c-1","flg":3},{"s":["^Sleep anyway.",{"->":"$r","var":true},null]}],["ev",{"^->":"camp_outside.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.","/str","/ev",{"*":".^.^.c-2","flg":6},{"s":["^Keep vigilant",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"camp_outside.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^ You can feel something indescribable is wandering nearby. As you fall asleep, something this stepping around...maybe it's only a dream. ","\n",{"#":"touch with who event chain triggered"},"ev",{"VAR?":"activated_special_events"},{"list":{"activated_special_events.touch_with_who_event":1}},"+",{"VAR=":"activated_special_events","re":true},"/ev","^When you wake up next day, you forget everything you dreamed last night.","\n","^You decide to: ",{"->":"camp_loop"},"\n",{"#f":5}],"c-1":["ev",{"^->":"camp_outside.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"^This night is horribly peaceful.","\n","^You decide to: ",{"->":"camp_loop"},"\n",{"#f":5}],"c-2":["ev",{"^->":"camp_outside.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"^ until sunrise.","\n",{"#":"stress level"},"ev",{"VAR?":"Stress"},1,"+",{"VAR=":"Stress","re":true},"/ev","ev",{"VAR?":"Stress"},"out","/ev","\n","^As you the Sun rises again from the east, you feel less panic. But the atomsphere of the city dims the light of Sun.","\n","^Although you are sleepy, you decide to.","\n",{"->":"camp_loop"},{"#f":5}]}],{"#f":1}],"camp_loop":[[["ev",{"^->":"camp_loop.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Start your mission.",{"->":"$r","var":true},null]}],["ev",{"^->":"camp_loop.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Camp outside one more day.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"camp_loop.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"initial_status"},{"#f":5}],"c-1":["ev",{"^->":"camp_loop.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"camp_outside"},{"#f":5}]}],{"#f":1}],"special_random_event_starter":[["<>","^have an advanture?","\n","ev","str","^Visit this mark on the map.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","end",{"#f":5}]}],{"#f":1}],"special_event_terminater":[["ev",2,6,"rnd","/ev",{"temp=":"spend_time"},"\n","ev",{"VAR?":"Actions"},{"VAR?":"spend_time"},"-",{"VAR=":"Actions","re":true},"/ev","ev","str","^After ","ev",{"VAR?":"spend_time"},"out","/ev","^ hours, I finally done it.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"daily_interaction"},{"#f":5}]}],{"#f":1}],"Special_event_chain":["end",{"#f":1}],"global decl":["ev",0,{"VAR=":"Violance"},0,{"VAR=":"Diplomacy"},0,{"VAR=":"Stewardship"},0,{"VAR=":"Knowledge"},0,{"VAR=":"Intrigue"},0,{"VAR=":"Stress"},0,{"VAR=":"Gold"},20,{"VAR=":"All_init_points"},"str","^","/str",{"VAR=":"Gender"},0,{"VAR=":"Luck"},0,{"VAR=":"Day"},"str","^","/str",{"VAR=":"Bless"},50,{"VAR=":"Fame"},50,{"VAR=":"HealthCondition"},100,{"VAR=":"Endday"},0,{"VAR=":"ConvertCount"},50,{"VAR=":"WeeklyExpense"},{"list":{"Weather.sunny":1,"Weather.rainy":2,"Weather.cloudy":3,"Weather.snowy":4,"Weather.foggy":5,"Weather.gusty":6,"Weather.lightning":7}},{"VAR=":"Weather"},"str","^","/str",{"VAR=":"TodayWeather"},{"list":{"Blessing.optimistic":1,"Blessing.potential":2,"Blessing.greedy":3,"Blessing.gregarious":4,"Blessing.strong":5,"Blessing.scholar":6,"Blessing.deceitful":7}},{"VAR=":"Blessing"},10,{"VAR=":"Actions"},{"list":{"Time.morning":1,"Time.noon":2,"Time.afternoon":3,"Time.evening":4}},{"VAR=":"Time"},{"list":{"Location.council":1,"Location.bank":2,"Location.camp":3,"Location.school":4,"Location.agency":5}},{"VAR=":"Location"},{"list":{"random_events.Null":1}},{"VAR=":"random_events"},1,{"VAR=":"idx"},{"list":{"NPC.guard":1,"NPC.teller":2,"NPC.receptionist":3,"NPC.pupil":4,"NPC.theif":5}},{"VAR=":"NPC"},{"list":{},"origins":["activated_special_events"]},{"VAR=":"activated_special_events"},"/ev","end",null],"#f":1}],"listDefs":{"Weather":{"sunny":1,"rainy":2,"cloudy":3,"snowy":4,"foggy":5,"gusty":6,"lightning":7},"Blessing":{"optimistic":1,"potential":2,"greedy":3,"gregarious":4,"strong":5,"scholar":6,"deceitful":7},"Time":{"morning":1,"noon":2,"afternoon":3,"evening":4,"night":5,"midnight":6},"Location":{"council":1,"bank":2,"camp":3,"school":4,"agency":5,"church":6,"sewer":7,"manor":8,"riverside":9,"forest":10,"cave":11},"random_events":{"Null":1},"NPC":{"guard":1,"teller":2,"receptionist":3,"pupil":4,"theif":5},"activated_special_events":{"touch_with_who_event":1,"Special_event_chain_activation":2,"Special_event_chain_activation_1":3}}};