# TODO list

>## Here you will find the instructions helping you to accomplish the exercise

:bulb: You can take a look at the final result whenever you want at this [location](http://192.168.0.101:81/todo)

### HTML template part

- Make the part of the form that will display the [default tasks](tasks.csv)

This form should also let the possibility to the user to remove one or more tasks in the same time

- Build the form that let the user adding new task one by one

- We **must** be able to retrieve **ALL the SELECTED todos indexes** that can be removed using the checkboxs

```HTML
<input id="task-<?= $index ?>" type="checkbox" name="???" value="<?= $index ?>">
```

- The date form element can be done using [HTML5](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/date) instead

### Utilites functions part

- You have the option to use the csv file php native functions

[fgetcsv](http://php.net/manual/fr/function.fgetcsv.php)

- Or basic functions: `fopen();` `fread();` `fwrite();`

- Or in an easier way by combining `file();` `file_put_contents();` and `file_get_contents();`

- `PHP_EOL` is a php native constant that stands for the new line character which is different between UNIX & windows

:bulb: Attention, if you choose to use these functions be careful to surround the cells with `""` in case of csv separators are inserted in the form!
