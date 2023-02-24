# Notes

## Frequently visited docs, sites, reference, etc

- [Beaufiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- [SQL Quick Reference](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlqr/SQL-Statements.html#GUID-1FA35EAD-AED2-4619-BFEE-348FF05D1F4A)

## Project Start Date

Project Start Date: 2/14/2023
Limit to ~ 30 mins a day

## Random stuff I learned along the way

- Each of the URLs on the Oracle site had a GUID after the .html in the URL. I'm not sure why, but I removed them.

  > A GUID (globally unique identifier) is a 128-bit text string that represents an identification (ID). Organizations generate GUIDs when a unique reference number is needed to identify information on a computer or network. A GUID can be used to ID hardware, software, accounts, documents and other items. [Reference](https://www.techtarget.com/searchwindowsserver/definition/GUID-global-unique-identifier)

- I learned that the `re` I used when importing the `requests` library in my python files, is an *alias* for the `requests` library.
  - I never knew that's what it was called (although I guess I could have inferred from it). Regardless, I learned that from [this video](https://www.youtube.com/watch?v=YnIfMZingMA).

## To-do

1. Scrape all the html from each URL
2. Assign each "block" the identifier that is in the heading, like an example:

```(SQL)
ADMINISTER KEY MANAGEMENT
  { keystore_management_clauses
  | key_management_clauses
  | secret_management_clauses
  | zero_downtime_software_patching_clauses
  } ;
```

A user can issue the following command (or something like it; haven't decided yet): `sqlref statements` and it would produce a list of the UNIQUE words in the statements section. In that list would be`Administer`, `Key`, and `Management`.