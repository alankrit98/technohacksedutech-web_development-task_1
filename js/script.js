let expression = '';
        function ClearResult() {
            expression = '';
            document.getElementById('result').value = '';
        }
        function BackSpace() {
            var len = document.getElementById('result');
            len.value = len.value.slice(0, -1);
            len.value = '';
        }
        function appendNumber(number) {
            expression += number;
            document.getElementById('result').value = expression;
        }
        function appendOperator(operator) {
            expression += operator;
            document.getElementById('result').value = expression;
        }
        function Calculate() {
            try {
                const result = eval(expression);
                document.getElementById('result').value = result;
                expression = result;
            } catch(error) {
                document.getElementById('result').value = 'Error';
            }
        }