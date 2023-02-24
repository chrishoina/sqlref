# sqlref Design Document

## Statements

`sqlref [Command]`

- Will there be Arguments and Flags?

### Commands

- Can we alias the sql statements, functions, etc to all the words that are in that statement? So there is a kind of "reverse lookup"
- Can we also alias synonyms for the SQL? For instance a user wishing to use a `SELECT` statement could, if they weren't sure of the existence of `SELECT` (unlikely, I know) could they search using any of the following?
  - choose, pick, elect, prefer, name, take, designate, cull, handpick, tag, cherry-pick, nominate, preselect, tap, appoint, accept, opt (for), tab, adopt, single (out), set, mark, embrace, espouse, fix, settle (on or upon)

```(shell)
sqlref statements
```

```(shell)
sqlref functions
```

```(shell)
sqlref expressions
```

```(shell)
sqlref conditions
```

```(shell)
sqlref subclauses
```

```(shell)
sqlref datatypes 
```

```(shell)
sqlref formatmodels
```

```(shell)
sqlref sqlplus 
```

```(shell)
sqlref sqlcl 
```

### Arguments

- Arguments are positional

### Flags

- Prepend by -- or -
- Flags are non-positional
- Flags can be `String` or `Boolean`

### To-do

- I want to expand to [the Database PL/SQL Language Reference](https://docs.oracle.com/en/database/oracle/oracle-database/21/lnpls/index.html), but much later on. 
- I have a `new_soup` variable that has the parent and children for what I need. Now I need to traverse the html. Beginning from this [video](https://youtu.be/ng2o98k983k?t=2091). 
- Then need to create a table with 
  <!-- - unique id
  - statement, function, condition, etc. name 
  - the statement or explanation
  - an example
  - also suggest relevant statements, conditions, functions, etc.(maybe for later?) -->

- A help at the top level of "statements" with a description of what can be done. Showing the list of available subcommands 

- Then filter unique values in the sql statement list. Then create subcommands" from those. Those subcommands will house all the related commands
  - a user can explore the command by typing it as an argument (or flag, whatever it is called)
