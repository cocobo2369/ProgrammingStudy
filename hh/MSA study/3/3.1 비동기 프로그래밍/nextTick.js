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