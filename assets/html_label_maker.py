print("What is the label? - ", end="")
label = input()
length = len(label)

remainder = (43 - length)/2

print("<!", end="")
for x in range(1,int(remainder)-1):
    print("-", end="")
print(" ", label, end=" ")
for y in range(1,int(remainder)+1):
    print("-", end="")
print(">", end="")