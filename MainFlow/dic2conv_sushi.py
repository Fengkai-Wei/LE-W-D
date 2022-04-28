dicts2conv = [
    {
        "_name"    : "accusative",
        "_var"      : "gender",
        "male"      : "his",
        "female"    : "her",
        "undefined" : "it"
    },
    {
        "test"      : "test"
    }
]

edition_counter = 0
marker = "//_last_placeholder"
placeholder = ord('a')

def dict2func(x: str = "DBfunctions", create_copy: bool = True):
    global placeholder
    with open(x, 'r', encoding = "utf-8") as file:
        content = file.read()
    content = content if content[-1] == "\n" else content + "\n"
    
    if marker in content:
        for line in content.split("\n"):
            if marker in line:
                placeholder = ord(line[-1])
                last_marker = line
    
    if create_copy:
        with open(x + "_backup", 'w', encoding = "utf-8") as file:
            file.write(content)
    
    for dict_ in dicts2conv:
        if "_name" not in dict_.keys():
            dict_["_name"] = "dict_" + chr(placeholder)
            dict_["_var"] = "var_" + chr(placeholder)
            placeholder = placeholder + 1
        content += "LIST %sPool = "%(dict_["_name"])
        content += ("(" + "),(".join([key_ for key_ in dict_ if key_[0] != "_" and key_ != "undefined"]) + ")\n\n")
        
        content += "===function DB_%s(%s)\n    {%s:\n"%(dict_["_name"], dict_["_var"], dict_["_var"])
        for key_ in dict_:
            if key_[0] == "_":
                continue
            content += "        - %s:\n            ~ %s\n"%(key_, dict_[key_])
        content += "    }\n\n"
    if marker in content:
        content = content.replace(last_marker, last_marker[:-1] + chr(placeholder))
    else:
        content += (marker + chr(placeholder) + "\n")
    
    with open(x, 'w', encoding = "utf-8") as file:
        file.write(content)

dict2func()