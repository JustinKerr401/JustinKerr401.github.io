print("What is the label? - ", end="")
label = input()
length = len(label)

remainder = (39 - length)/2

print("/* ", end="")
for x in range(1,int(remainder)):
    print("-", end="")
print(" ", label, " ", end="")
for y in range(1,int(remainder)):
    print("-", end="")
print(" */", end="")