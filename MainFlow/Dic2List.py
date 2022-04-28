def dic_to_inkle_list(dict, name, item):
	output_0 = "LIST "+ name + "Pool = "
	output_1 = "===function DB_"+name+"("+item+")"+"\n\t"+"{"+item+":"+"\n\t\t"
	for key in dict:
		output_0 += "("+ key + "),"
		output_1 = output_1 + "-"+ key + ":" + "\n\t\t\t~ return "+ str(dict[key]) + "\n\t\t"
	output_1 += "}"
	output_0 = output_0[:-1] + "\n\n"
	with open("{}_{}.txt".format(name,item),"w") as file:
		file.write(output_0 +output_1 )


testdict = {"sam":28,"jake":24,"Mary":18,"sushi":24}

dic_to_inkle_list(testdict, "name", "age")