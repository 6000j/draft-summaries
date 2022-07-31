import json
import re
import os
import urllib.request as ur


""" f = open("backend/parser/ChampFiles/Ahri.json", 'r')

ahriCore = json.loads(f.read())

# print(ahri)
# print((ahri["data"])["spells"])
# print(ahri['data']['Ahri'].keys())
ahri = ahriCore['data']['Ahri']
# print(ahriUseful['stats'])
# print(ahri['spells'][0].keys())

spells = ahri['spells']

oup = {}

oup["name"] = ahri['name']
oup["stats"] = ahri['stats']

tempSpells = []
tempSpells.append({"spellName" : ahri['passive']['name'], "statuses" : []})
for i in spells:
    tempTT = i['tooltip']
    statii = re.findall("<status>(.*)</status>", tempTT)
    # print(statii)
    tempSpells.append({"spellName" : i['name'], "statuses":statii})

oup["spells"] = tempSpells

oup["features"] = []
oup["damageType"] = []

f.close()

k = open("backend/parser/OutputAhri.json", 'w')


k.write(json.dumps(oup, indent=4))

k.close() """

# Function to read the versions file and get the latest version of Data Dragon
def getNewestVersion():
    versionsList = ur.urlopen("https://ddragon.leagueoflegends.com/api/versions.json")
    for line in versionsList:
        versionsArray = json.loads(line)
    return versionsArray[0]

# Function to get a list of champions from champions json file
def getListOfChamps():
    currVersion = getNewestVersion()
    champsListUrl = "https://ddragon.leagueoflegends.com/cdn/" + currVersion + "/data/en_US/champion.json"
    champsList = ur.urlopen(champsListUrl)
    for k in champsList:
        cmpjs = json.loads(k)["data"]
    return cmpjs.keys()



# Parses a champion from the input string
def parseChampFromString(input):
    champCore = json.loads(input)

    # print(ahri)
    # print((ahri["data"])["spells"])
    # print(ahri['data']['Ahri'].keys())
    champ = champCore['data'][list(champCore['data'].keys())[0]]
    # print(ahriUseful['stats'])
    # print(ahri['spells'][0].keys())

    spells = champ['spells']

    oup = {}

    oup["name"] = champ['name']
    oup["stats"] = champ['stats']

    tempSpells = []
    tempSpells.append({"spellName" : champ['passive']['name'], "statuses" : []})
    for i in spells:
        tempTT = i['tooltip']
        statii = re.findall("<status>(.*?)</status>", tempTT)
        # print(statii)
        tempSpells.append({"spellName" : i['name'], "statuses":statii, "features":[]})

    oup["spells"] = tempSpells

    oup["features"] = []
    oup["damageType"] = []

    # f.close()

    # k = open("backend/parser/OutputAhri.json", 'w')


    # target.write(json.dumps(oup, indent=4))
    # print(json.dumps(oup, indent=4))
    # return(json.dumps(oup, indent=4))
    # return(json.dumps(oup))
    return oup
    # k.close()

def convert_all_champs():
    # directory_in_str = "backend/Parser/ChampFiles"
    # directory =  "backend/Parser/ChampFiles"
    
    currVersion = getNewestVersion()
    champsList = getListOfChamps()

    loc = "https://ddragon.leagueoflegends.com/cdn/" + currVersion + "/data/en_US/champion/"



    aggregator = {}
    i = 0
    for champ in champsList:
        currChamp = ur.urlopen(loc + champ + ".json")
        for line in currChamp:
            oup = parseChampFromString(line)
            aggregator[champ] = oup

    """ for file in os.scandir(directory):
        if file.name[-5:] == ".json": 
            print(file.name)
            f = open(directory_in_str + "/" +  file.name, 'r', encoding="utf-8")
            oup = parseChampFromString(f.read())
            aggregator[(file.name[:-5])] = oup.replace("\\n", "\n")
            f.close() """
    stuffToWrite = json.dumps(aggregator, indent=4) # .replace("\\n", "\n")
    out = open("backend/parser/OutputChamps.json", 'w')
    out.write(stuffToWrite)
            
    out.close()

convert_all_champs()
# Below code taken from https://stackoverflow.com/questions/10377998/how-can-i-iterate-over-files-in-a-given-directory



#nprint(oup)

# Things I want to store for spells:
# Name
# That might be it for non-custom stuff? Is it worth storing cooldowns still?
# Want to also store passive name, ofc
# Can use the <status> tags to get extra info out potentially?






# 
# print("test")