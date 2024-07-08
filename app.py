from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import os

app = Flask(__name__, static_url_path='/troll_app/static')
app.secret_key = 'your_secret_key'  # Clé secrète pour les sessions Flask

# Chargement et gestion des pseudos
def load_pseudos():
    try:
        with open("pseudos.txt", "r") as file:
            pseudos = [{'pseudo': line.strip().split('|')[0], 'nationality': line.strip().split('|')[1]} for line in file]
    except FileNotFoundError:
        pseudos = []
    return pseudos

def save_pseudos(pseudos):
    with open("pseudos.txt", "w") as file:
        for p in pseudos:
            file.write(f"{p['pseudo']}|{p['nationality']}\n")

@app.route('/')
def index():
    pseudos = load_pseudos()
    return render_template('index.html', pseudos=pseudos)

@app.route('/add', methods=['POST'])
def add_pseudo():
    pseudo = request.form['pseudo'].strip()
    nationality = request.form['nationality'].strip()
    if pseudo and nationality:
        pseudos = load_pseudos()
        if pseudo in [p['pseudo'] for p in pseudos]:
            return jsonify({'status': 'error', 'message': 'Le pseudo existe déjà.'})
        else:
            pseudos.append({'pseudo': pseudo, 'nationality': nationality})
            save_pseudos(pseudos)
            return jsonify({'status': 'success', 'message': 'Pseudo ajouté avec succès.'})
    else:
        return jsonify({'status': 'error', 'message': 'Le champ de pseudo ou de nationalité est vide.'})

@app.route('/delete/<int:index>')
def delete_pseudo(index):
    pseudos = load_pseudos()
    del pseudos[index]
    save_pseudos(pseudos)
    return jsonify({'status': 'success', 'message': 'Pseudo supprimé avec succès.'})

if __name__ == '__main__':
    app.run(debug=True)
