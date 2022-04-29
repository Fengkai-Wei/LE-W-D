INCLUDE Checks
INCLUDE Events
INCLUDE Ends
INCLUDE Init
INCLUDE NPCinit
INCLUDE SpecialEvents
INCLUDE CampEvents
INCLUDE CouncilEvents
INCLUDE BankEvents
INCLUDE SchoolEvents
INCLUDE AgencyEvents
INCLUDE DBfunctions
INCLUDE FlavourEvents
INCLUDE FlowControl
INCLUDE FinalEvent




/*
======================================================================
Define symbols and expressions:
    
    0. ThisEvent:
        The text without any decorations stand for a script. It should be a existing script file linked to Main ink file�?In this case, ite Main ink file is "MainFl.ink". All events should be CamelCase.

    1. "|":
        Arrow in float chart of script. If no "^" to indicate upward direction, script logic flows downwards.
    
    2. "---":
        Small dashs are indicating horizential logic flow. "<" and ">" stand for left and right repectively.
    
    3. "()":
        Bracket symbols. Texts in brackets are short description of the script file above. The left bracket should left align with the denoting script name.
    
    4. "*":
        Asterisks are the check points. The checker should exists in the same script or same script file, depending on how detailed the related flow chart is. 
        
    5. "[]":
        Square bracket is for denoting checker of check point close to it. Text inside is a short description. 
        
    6. "P" and "N":
        P is short for Pass, and N is Not. They indicate the logic flow after a check happens, which is directly linked by the route where P/N sit on.
        
    7. "(...)":
        3 dots indicate further details of logic flow are stored in the script next to them. Due to the complicity of logic flows, it's impossible to draw them altogether. They are stored by pieces throughout the project.
        
    8. :this_knot: :
        Colon symbol pair. Text in colon pair should be a existing knot. All knots should be UnderScoreCase.
        
    9. FLOW CHART = ThisEvent or FLOW CHART = :this_knot: :
        The title of flow chart. Letters in "FLOW CHART" should be capital case and no underscore between. the indication relation is given by single equal linking the name of indicated script or script file.
        
========================================================================



  (Start)
    |
    |
    |
  MainFlow
    |
    |
    |
  Events
  (Initialisation) 
    |
    |
    |
  MainFlow       [Max Day]
  (Day Run)<----N----*----P--->FinalEvent(...)
    |                ^         (End)
    |                |
    |                |
  Events(...)        |
  (Daily Activity)--->




FLOW CHART = MainFlow
========================================================================
This script is the main flow of the game. 
*/

    You approach a small city in the midnight, where all sorts of vipers and leeches breed in. <hl_pos>Evils</hl_pos> and <hl_pos>Sins</hl_pos> creep underneathe every vessel, waiting for any potential victims, and then break their mind as soon as possible.

    As a new Heretic Cultist of a LEWD faith, your mission is to convert believes of dissents minds, regardless of their race, social class, even... more.
    
    <img src="Asset/Arts/test.png">
    


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
            {fame_checker()}
    }
    Today is day {Day} in this city. It's {TodayWeather} outside.
    {
        - Day < 100:
            Where should I do missionary work?
                ->daily_activity
                
        - Day >= 100:
            The last day comes...
                ->final_event
    }
    






