import json
import re
import os

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

def parseChampFromFile(input):


    champCore = json.loads(input)

    # print(ahri)
    # print((ahri["data"])["spells"])
    # print(ahri['data']['Ahri'].keys())
    champ = champCore['data'][(champCore['data'].keys()[0])]
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
        statii = re.findall("<status>(.*)</status>", tempTT)
        # print(statii)
        tempSpells.append({"spellName" : i['name'], "statuses":statii})

    oup["spells"] = tempSpells

    oup["features"] = []
    oup["damageType"] = []

    # f.close()

    # k = open("backend/parser/OutputAhri.json", 'w')


    # target.write(json.dumps(oup, indent=4))
    return(json.dumps(oup, indent=4))
    # k.close()

# Below code taken from https://stackoverflow.com/questions/10377998/how-can-i-iterate-over-files-in-a-given-directory
directory_in_str = "backend/Parser/ChampFiles"
directory = os.fsencode(directory_in_str) 

output = open("backend/parser/OutputChamps.json", 'a')

for file in os.listdir(directory):
     filename = os.fsdecode(file)
     if filename.endswith(".json"): 
         # print(os.path.join(directory, filename))
         continue
     else:
         continue


#nprint(oup)

# Things I want to store for spells:
# Name
# That might be it for non-custom stuff? Is it worth storing cooldowns still?
# Want to also store passive name, ofc
# Can use the <status> tags to get extra info out potentially?






# 
# print("test")