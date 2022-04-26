INCLUDE Checks
INCLUDE Events
INCLUDE Ends
INCLUDE Init
INCLUDE NPCinit
INCLUDE FlavourEvents
INCLUDE CampEvents
INCLUDE CouncilEvents
INCLUDE BankEvents
INCLUDE SchoolEvent
INCLUDE AgencyEvents







    You approach a small city in the midnight, where all sorts of vipers and leeches breed in. <hl_pos>Evils</hl_pos> and <hl_pos>Sins</hl_pos> creep underneathe every vessel, waiting for any potential victims, and then break their mind as soon as possible.

    As a new heretic instructor of a LEWD faith, your mission is to convert believes of dissents minds, regardless of their race, social class, even... more.
    

    
    
    *[continue]
        ->before_start

//Start game 

===days
    ~ Day += 1
    ~ Actions = 10
    ~ TodayWeather = LIST_RANDOM(Weather)
    {
        - Day mod 7 == 0:
            ~Gold -= WeeklyExpense
            In Week {Day / 7}, {WeeklyExpense} Gold rooked by all sorts of tricks of Merchants.
    }
    Today is day {Day} in this city. It's {TodayWeather} outside.
    {
        - Day < 100:
            Where should I do missionary work?
                ->daily_interaction
                
        - Day >= 100:
            The last day comes...
                ->final_event
    }
    

    
    
    
    














