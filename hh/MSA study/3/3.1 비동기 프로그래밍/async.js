function func(callback) {		// fucn �Լ� ����
	callback("callback!!");	// ���� ������ ���޵� callback �Լ� ȣ��
}

func( (param) => {			// �͸� �Լ��� ���ڷ� func �Լ� ȣ��
	console.log(param);
});