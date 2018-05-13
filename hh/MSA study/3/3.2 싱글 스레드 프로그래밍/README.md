# 3.2 �̱� ������ ���α׷���

> node.js �� �̱۽������ ��Ƽ������ ������ �����ϵ��� �����ӿ�ũ�� �����Ǿ� �ִ�.

<pre>
<code>

function func(callback) {
	process.nextTick(callback, "callback!!");
}

try {
	func((param) => {
		a.a = 0;
	});
} catch (e) {
	console.log("exception!!");
}

process.on("uncaughtException", (error) => {	// ��� �����忡�� �߻��ϴ� ����
	console.log("uncaughtException")
});

</code></pre>


> ���⼭ �����ؾ��� ���� �̱� �������� �� ���� ������ ������ �������� �ʴ´ٴ� ���̴�. 3.1���� try ~ catch ������ �� ���� ���ܰ� �ִ� ���� �� ����̴�. node.js�� ��� �����忡�� ���� ó���� �� �� �ֵ��� uncaughtException �̺�Ʈ�� �����Ѵ�.