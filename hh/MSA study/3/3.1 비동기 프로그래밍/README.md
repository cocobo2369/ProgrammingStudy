# ȭ��ǥ �Լ�

>�߰�ȣ ������ ���� �� �ִ� �ڵ� ��Ÿ���̶�� �ϴµ� ���� �� �𸣰ڴ�. �Ʒ� �� �ڵ�� ���� �ڵ��̴�. dynamic this �� lexical this �� �κ��� �����ؾߵȴ�.

<pre>
<code>

friends.forEach(function (friend) {
	console.log(that.name + " says hello to " + friend)
});

</code>
</pre>

<pre>
<code>

friends.forEach(friend => {
	console.log(this.name + " says hello to " + friend)
});

</code>
</pre>


# nextTick�� ����� �񵿱� ���α׷���

<pre>
<code>
function func(callback) {
	// nextTick�� ����� ���� ������ ���޵�  callback. �Լ� ȣ��
	process.nextTick(callback, "callback!!");
}

try {						//����ó���� ���� try~catch��
	func( (param) => {		
		a.a = 0;			//���ܹ߻�
	});
} catch (e) {
	console.log ("exception!!");		//���� �������� ��� ȣ��
}
</code></pre>

> �ǵ������� ���ܸ� ���������� �ұ��ϰ� ���� ���Ѵ�. �̴� process.nextTick �Լ� �����̴�. �� �Լ��� node.js ������ ������ Ǯ�� �ٸ� ������ ������ �ݹ� �Լ��� �����մϴ�. try catch ���� ���� ������ �������� �����ϱ� ������ ���ܸ� ����Ҵ�. 


