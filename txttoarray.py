print("[", end="")

with open("src/assets/10-million-password-list-top-10000.txt") as f:
    for l in f.readlines():
        print('"' + l.replace("\n", "") + '", ', end=" ")

