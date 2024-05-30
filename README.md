**Sections**
- [`spt-diffpatch`](#spt-diffpatch)
  - [Usage](#usage)
    - [Arguments](#arguments)
- [Linux Commands](#linux-commands)
  - [`diff` command](#diff-command)
  - [`patch` command](#patch-command)
  - [`comm` command](#comm-command)
    - [Failure Conditions](#failure-conditions)
- [git diff](#git-diff)
- [Notes](#notes)
- [TODO](#todo)
- [Help pages](#help-pages)
  - [diff](#diff)
  - [patch](#patch)
  - [comm](#comm)

![Coffe-code](d:/neo_archive/Dev/assets/images/Memes/coffee-code.png)
# `spt-diffpatch`

A customizable compare/diff/patch tool for SPT-AKI releases >= 3.8.0

## Usage

$ **spt-diffpatch** -u *FileA* *FileB*

- <p>In update mode (-u), *FileA* will be updated to be identical to *FileB*. It is intended to be used to bring an outdated file
  up to date with a new file.

*Syntax*

`$spt-diffpatch [options] <oldfile> <newfile>`

*Paramaters:*

- `original` - The existing file (potentially outdated).
- `newfile` - An updated version of `original`.

### Arguments

  Name | Flag | Description
  --- | --- | ---
  ignore | -N | Ignores absent files
  verbose | -v | Remove verbose elements
  column-mode | -y | Display output in columns, side-by-side
  recursive | -r `pattern` | Compare all files in the directory matching a regex `pattern`
  update | -u | Update mode.  changes fileA to be the same as fileB

  **Exit status**

  Status = 0 if inputs are the same, 1 if different, 2 if trouble.

**Output**

- Create a 
  ```bash
  diff -u file1 file2 > out_file.diff
  ```

# Linux Commands 

## `diff` command

Using the *-u* flag will signal `diff` to view differences in unified mode, which is similar to context mode but it doesn’t display any redundant information. 

Output:

  file1 is indicated with '---' and a timestamp.
  file2 is indicated with '+++' and a timestamp.
  lines marked with '@@ -.., +.. @@' indicate the range of mismatched lines.
  subsequent lines indicate individual differences between files.
  - unchanged lines are displayed without any prefix.
  - Lines in the first file to be deleted are prefixed with '-'.
  - Lines in the second file to be added are prefixed with '+'.


## `patch` command
Apply a patch:
```bash
patch < out_file.diff
```

Undo a patch:
```bash
patch -R < out_file.diff
```

## `comm` command



### Failure Conditions

Patch Failure Conditions

Error message resulting from a failed patch attempt:
```
patching file thesis.tex
Hunk #1 FAILED at 105
Hunk #2 succeeded at 1073 (offset 2 lines).
1 out of 2 hunks FAILED -- saving rejects to file thesis.tex.reg
```


# git diff

  1. Create new git repository:   

      `$ git init`
  2. Create a file with some text:  

      `$ echo hello > file.txt`

  3. Add to git repo: 

      `$ git commit .`    
      *. means add everything in the current directory to staging(next commit)*

  4. Commit changes:  `$ git commit -m "initial"`
      *Output:*
      ```
      [master (root-commit) 7445fda] initial
      1 file changed, 1 insertion(+)
      create mode 100644 file.txt
      ```
      By default, `git diff` will be in *compare* mode, which checks everything in the working folder (- .gitignore) against the git repository.  Changes which have only been added to *staging* will not be reflected.



# Notes

How it works:
- Uses linux `diff` and `patch`.
- Hunk is a term used by `diff` representing the raw bytes changed


# TODO

- **Usage** - create file section `echo > file1.txt` *Creates a new empty file*
- Linux `diff`, and `patch` section
- git `diff` section.

- Testing with git section.


# Help pages

## diff
```
$ diff --help
Usage: diff [OPTION]... FILES
Compare FILES line by line.

Mandatory arguments to long options are mandatory for short options too.
      --normal                  output a normal diff (the default)      
  -q, --brief                   report only when files differ
  -s, --report-identical-files  report when two files are the same
  -c, -C NUM, --context[=NUM]   output NUM (default 3) lines of copied context
  -u, -U NUM, --unified[=NUM]   output NUM (default 3) lines of unified context
  -e, --ed                      output an ed script
  -n, --rcs                     output an RCS format diff
  -y, --side-by-side            output in two columns
  -W, --width=NUM               output at most NUM (default 130) print columns
      --left-column             output only the left column of common lines
      --suppress-common-lines   do not output common lines

  -p, --show-c-function         show which C function each change is in
  -F, --show-function-line=RE   show the most recent line matching RE
      --label LABEL             use LABEL instead of file name and timestamp
                                  (can be repeated)

  -t, --expand-tabs             expand tabs to spaces in output
  -T, --initial-tab             make tabs line up by prepending a tab
      --tabsize=NUM             tab stops every NUM (default 8) print columns
      --suppress-blank-empty    suppress space or tab before empty output lines
  -l, --paginate                pass output through 'pr' to paginate it

  -r, --recursive                 recursively compare any subdirectories found
      --no-dereference            don't follow symbolic links
  -N, --new-file                  treat absent files as empty
      --unidirectional-new-file   treat absent first files as empty
      --ignore-file-name-case     ignore case when comparing file names
      --no-ignore-file-name-case  consider case when comparing file names
  -x, --exclude=PAT               exclude files that match PAT
  -X, --exclude-from=FILE         exclude files that match any pattern in FILE
  -S, --starting-file=FILE        start with FILE when comparing directories
      --from-file=FILE1           compare FILE1 to all operands;
                                    FILE1 can be a directory
      --to-file=FILE2             compare all operands to FILE2;
                                    FILE2 can be a directory

  -i, --ignore-case               ignore case differences in file contents
  -E, --ignore-tab-expansion      ignore changes due to tab expansion
  -Z, --ignore-trailing-space     ignore white space at line end
  -b, --ignore-space-change       ignore changes in the amount of white space
  -w, --ignore-all-space          ignore all white space
  -B, --ignore-blank-lines        ignore changes where lines are all blank
  -I, --ignore-matching-lines=RE  ignore changes where all lines match RE

  -a, --text                      treat all files as text
      --strip-trailing-cr         strip trailing carriage return on input
      --binary                    read and write data in binary mode

  -D, --ifdef=NAME                output merged file with '#ifdef NAME' diffs
      --GTYPE-group-format=GFMT   format GTYPE input groups with GFMT
      --line-format=LFMT          format all input lines with LFMT
      --LTYPE-line-format=LFMT    format LTYPE input lines with LFMT
    These format options provide fine-grained control over the output
      of diff, generalizing -D/--ifdef.
    LTYPE is 'old', 'new', or 'unchanged'.  GTYPE is LTYPE or 'changed'.
    GFMT (only) may contain:
      %<  lines from FILE1
      %>  lines from FILE2
      %=  lines common to FILE1 and FILE2
      %[-][WIDTH][.[PREC]]{doxX}LETTER  printf-style spec for LETTER
        LETTERs are as follows for new group, lower case for old group:
          F  first line number
          L  last line number
          N  number of lines = L-F+1
          E  F-1
          M  L+1
      %(A=B?T:E)  if A equals B then T else E
    LFMT (only) may contain:
      %L  contents of line
      %l  contents of line, excluding any trailing newline
      %[-][WIDTH][.[PREC]]{doxX}n  printf-style spec for input line number
    Both GFMT and LFMT may contain:
      %%  %
      %c'C'  the single character C
      %c'\OOO'  the character with octal code OOO
      C    the character C (other characters represent themselves)

  -d, --minimal            try hard to find a smaller set of changes
      --horizon-lines=NUM  keep NUM lines of the common prefix and suffix
      --speed-large-files  assume large files and many scattered small changes
      --color[=WHEN]       color output; WHEN is 'never', 'always', or 'auto';
                             plain --color means --color='auto'
      --palette=PALETTE    the colors to use when --color is active; PALETTE is
                             a colon-separated list of terminfo capabilities

      --help               display this help and exit
  -v, --version            output version information and exit

FILES are 'FILE1 FILE2' or 'DIR1 DIR2' or 'DIR FILE' or 'FILE DIR'.
If --from-file or --to-file is given, there are no restrictions on FILE(s).
If a FILE is '-', read standard input.
Exit status is 0 if inputs are the same, 1 if different, 2 if trouble.
```

## patch


## comm

`comm` command help page:
```
$ comm --help
Usage: comm [OPTION]... FILE1 FILE2
Compare sorted files FILE1 and FILE2 line by line.

When FILE1 or FILE2 (not both) is -, read standard input.

With no options, produce three-column output.  Column one contains       
lines unique to FILE1, column two contains lines unique to FILE2,        
and column three contains lines common to both files.

  -1              suppress column 1 (lines unique to FILE1)
  -2              suppress column 2 (lines unique to FILE2)
  -3              suppress column 3 (lines that appear in both files)    

  --check-order     check that the input is correctly sorted, even       
                      if all input lines are pairable
  --nocheck-order   do not check that the input is correctly sorted      
  --output-delimiter=STR  separate columns with STR
  --total           output a summary
  -z, --zero-terminated    line delimiter is NUL, not newline
      --help     display this help and exit
      --version  output version information and exit

Note, comparisons honor the rules specified by 'LC_COLLATE'.

Examples:
  comm -12 file1 file2  Print only lines present in both file1 and file2.
  comm -3 file1 file2  Print lines in file1 not in file2, and vice versa.

GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
Full documentation <https://www.gnu.org/software/coreutils/comm>
or available locally via: info '(coreutils) comm invocation'
```